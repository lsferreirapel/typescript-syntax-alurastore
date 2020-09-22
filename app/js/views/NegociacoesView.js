System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
                    return `<table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.get().map(negociacao => `<tr>
                            <td>${("0" + negociacao.date.getDate()).slice(-2)}/${("0" + (negociacao.date.getMonth() + 1)).slice(-2)}/${negociacao.date.getFullYear()}</td>
                            <td>${negociacao.quantity}</td>
                            <td>${negociacao.value}</td>
                            <td>${negociacao.volume}</td>
                        </tr>`).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
            <script>alert('Hello world!')</script>`;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
