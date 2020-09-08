class NegociacaoController {
    constructor() {
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
    }
    add(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputDate.value, this._inputQuantity.value, this._inputValue.value);
        console.log(negociacao);
    }
}
