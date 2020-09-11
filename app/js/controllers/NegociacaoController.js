class NegociacaoController {
    constructor() {
        // private _negociacoes: Negociacoes = new Negociacoes();
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    add(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._negociacoes.add(negociacao);
        this._negociacoes.get().forEach((negociacao, index) => {
            console.log(`Negociação ${index + 1}`);
            console.log(negociacao.date);
            console.log(negociacao.quantity);
            console.log(negociacao.value);
        });
        this._negociacoesView.update(this._negociacoes);
        this._messageView.update('Negociação adicionada com sucesso');
    }
}
