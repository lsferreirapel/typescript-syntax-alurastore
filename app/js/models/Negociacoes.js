System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                add(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                get() {
                    return [].concat(this._negociacoes);
                }
                toString() {
                    console.log('Print:');
                    console.log(JSON.stringify(this._negociacoes));
                }
                isEqual(negociacoes) {
                    return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.get);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
