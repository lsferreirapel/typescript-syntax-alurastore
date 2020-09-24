System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DaysOfTheWeek;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._messageView = new index_1.MessageView('#messageView');
                    this._service = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                add() {
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._isUtilDay(date)) {
                        this._messageView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negociacoes.add(negociacao);
                    index_5.print(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._messageView.update('Negociação adicionada com sucesso');
                }
                _isUtilDay(date) {
                    return date.getDay() != DaysOfTheWeek.Sunday
                        && date.getDay() != DaysOfTheWeek.Saturday;
                }
                importData() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            let negociacoesToImport = yield this._service.getNegociacoes(res => {
                                if (!res.ok) {
                                    throw new Error(res.statusText);
                                }
                                return res;
                            });
                            let currentNegociacoes = this._negociacoes.get();
                            negociacoesToImport
                                .filter(negociacao => !currentNegociacoes.some(current => negociacao.isEqual(current)))
                                .forEach(negociacao => this._negociacoes.add(negociacao));
                            this._negociacoesView.update(this._negociacoes);
                            this._messageView.update('Negociações importadas com sucesso');
                        }
                        catch (err) {
                            this._messageView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importData", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DaysOfTheWeek) {
                DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 0] = "Sunday";
                DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
                DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
                DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
                DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
                DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
                DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
            })(DaysOfTheWeek || (DaysOfTheWeek = {}));
        }
    };
});
