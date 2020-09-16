System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._inputDate = $('#data');
                    this._inputQuantity = $('#quantidade');
                    this._inputValue = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                add(event) {
                    event.preventDefault();
                    const negociacao = new index_2.Negociacao(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
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
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
