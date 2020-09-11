class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    add(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get() {
        return [].concat(this._negociacoes);
    }
}
