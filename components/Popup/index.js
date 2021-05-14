import "./index.css"

export default class Popup {
    constructor($target) {
        this._app = $target;
        this._popup = null;
        this.state = {
            visible: false, data: {
                img: "https://image.tmdb.org/t/p/w500/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg"
                , title: "미나리"
                , desc: "줄거리 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구"
                , open: "2020"
            }
        };
    }

    render() {
        if (!this._popup) {
            this._popup = document.createElement('div');
            this._popup.classList.add('movie__popup');
            this._app.append(this._popup);
        }

        if (!this.state.visible) this._popup.style.display = 'none'
        else this._popup.style.display = 'block';

        if (this.state.data) {
            this._popup.innerHTML = `<div class="movie__popup-bar"><span class="movie__popup-close" id="movie-popup-close">X</span></div>
            <div class="movie__popup-image"><img src="${this.state.data.img}" width="400" /></div>
            <div class="movie__popup-title">${this.state.data.title} (${this.state.data.open})</div>
            <div class="movie__popup-desc">${this.state.data.desc}</div>`;
        }
    }
}