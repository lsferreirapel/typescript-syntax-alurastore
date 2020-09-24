import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {
    private _negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    get(): Negociacao[] { 
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    toString() : void {
        console.log('Print:');
        console.log(JSON.stringify(this._negociacoes))
    }

    isEqual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.get)
    }
}