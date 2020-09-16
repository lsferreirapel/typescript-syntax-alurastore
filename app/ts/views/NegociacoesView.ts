import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes>{

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