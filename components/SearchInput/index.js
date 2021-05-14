import "./index.css"

export default class SearchInput {
    constructor($target) {
        this._search = $target;
    }

    render() {
        this._search.innerHTML = '';

        let searchInput = document.createElement('input');
        searchInput.classList.add('movie__search-input');
        searchInput.placeholder = '영화 제목을 입력해주세요.. 🎥';

        this._search.append(searchInput);
    }
}