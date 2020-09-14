class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    add(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
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
