class NegociacaoController {

    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    // private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _messageView = new MessageView('#messageView');
    
    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    add(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
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