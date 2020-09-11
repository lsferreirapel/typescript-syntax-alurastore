class NegociacoesView {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(model: Negociacoes): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {
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
                    ${model.get().map(negociacao => 
                        `<tr>
                            <td>${("0" + negociacao.date.getDate()).slice(-2)}/${("0" + (negociacao.date.getMonth()+1)).slice(-2)}/${negociacao.date.getFullYear()}</td>
                            <td>${negociacao.quantity}</td>
                            <td>${negociacao.value}</td>
                            <td>${negociacao.volume}</td>
                        </tr>`
                    ).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>`;
    }

    
}