import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {
    
    constructor(
        readonly date: Date,
        readonly quantity: number,
        readonly value: number
    ) {}

    get volume() {
        return this.quantity * this.value;
    }

    toString(): void {
        console.log('Print:');
        console.log(
            `Data: ${this.date}
            Quantidade: ${this.quantity}
            Valor: ${this.value}
            Volume: ${this.volume}`
        );
    }

    isEqual(negociacao: Negociacao): boolean {
        return this.date.getDate() === negociacao.date.getDate()
                && this.date.getMonth() === negociacao.date.getMonth()
                && this.date.getFullYear() === negociacao.date.getFullYear();
    }

}