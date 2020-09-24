System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(date, quantity, value) {
                    this.date = date;
                    this.quantity = quantity;
                    this.value = value;
                }
                get volume() {
                    return this.quantity * this.value;
                }
                toString() {
                    console.log('Print:');
                    console.log(`Data: ${this.date}
            Quantidade: ${this.quantity}
            Valor: ${this.value}
            Volume: ${this.volume}`);
                }
                isEqual(negociacao) {
                    return this.date.getDate() === negociacao.date.getDate()
                        && this.date.getMonth() === negociacao.date.getMonth()
                        && this.date.getFullYear() === negociacao.date.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
