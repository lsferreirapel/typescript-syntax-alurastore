class NegociacaoController {

    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
    }

    add(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );

        console.log(negociacao);
    }
}