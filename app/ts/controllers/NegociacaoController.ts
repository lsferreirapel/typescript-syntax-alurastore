class NegociacaoController {

    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;
    // private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _messageView = new MessageView('#messageView');
    
    constructor() {
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    add(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );
        
        this._negociacoes.add(negociacao);
        this._negociacoes.get().forEach((negociacao, index) => {
            console.log(`Negociação ${index+1}`);
            console.log(negociacao.date);         
            console.log(negociacao.quantity);         
            console.log(negociacao.value);         
        });

        this._negociacoesView.update(this._negociacoes);
        this._messageView.update('Negociação adicionada com sucesso');
    }
}