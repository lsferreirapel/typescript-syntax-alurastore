System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_date, _quantity, _value) {
                    this._date = _date;
                    this._quantity = _quantity;
                    this._value = _value;
                }
                get date() {
                    return this._date;
                }
                get quantity() {
                    return this._quantity;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._quantity * this._value;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
