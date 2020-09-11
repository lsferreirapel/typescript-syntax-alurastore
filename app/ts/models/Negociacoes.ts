class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    get(): Negociacao[] { 
        return [].concat(this._negociacoes);
    }
}