import "./App.css";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";

let instance;
class App {
    constructor($target) {
        if (!instance) {
            this._main = $target;
            this._component = {};
            this._component._searchInput = null;
            this._component._searchResult = null;

            instance = this;
        }
        return instance;
    }

    render() {
        /* 모든 컴포넌트 렌더링 */
        for (let component in this._component) {
            this._component[component].render();
        }

        this._main.addEventListener('click', this.clickHandler);
        this._main.addEventListener('keypress', this.keyPressHandler);
    }

    clickHandler = (e) => {
        console.log('click!!')
        return;
    }

    keyPressHandler = (e) => {
        if (e.key == 'Enter' && e.target.tagName == 'INPUT') {
            if (!e.target.value) {
                alert('영화 제목을 입력해주세요.')
                return;
            }
        }
        return;
    }
}


class AppBuilder {
    constructor($target) {
        this._app = new App($target);
    }

    setSearchInput($target) {
        console.log(this._app)
        this._app._component._searchInput = new SearchInput($target);
        return this;
    }

    setSearchResult($target) {
        this._app._component._searchResult = new SearchResult($target);
        return this;
    }

    build() {
        this._app.render();
        return this._app;
    }
}

new AppBuilder(document.getElementById("main"))
    .setSearchInput(document.getElementById('movie-search'))
    .setSearchResult(document.getElementById("movie-result"))
    .build();