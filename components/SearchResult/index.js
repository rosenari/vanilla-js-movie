import "./index.css";

export default class SearchResult {
    constructor($target) {
        this._result = $target;
        this.state = [{ img: "https://image.tmdb.org/t/p/w500/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg", title: "미나리" }
            , { img: "https://image.tmdb.org/t/p/w500/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg", title: "미나리" }
            , { img: "https://image.tmdb.org/t/p/w500/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg", title: "미나리" }
            , { img: "https://image.tmdb.org/t/p/w500/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg", title: "미나리" }
        ];
    }

    render() {
        this._result.innerHTML = '';
        for (let item of this.state) {
            let movie_item = document.createElement('div');
            movie_item.classList.add('movie__item');
            movie_item.innerHTML = `<div class="movie__item-img"><img src='${item.img}' width=250 /></div>
                                    <div class="movie__item-title">${item.title}</div>`;
            this._result.append(movie_item);
        }
    }
}