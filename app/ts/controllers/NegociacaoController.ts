import { NegociacoesView, MessageView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { print } from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputDate: JQuery;

    @domInject('#quantidade')
    private _inputQuantity: JQuery;
    
    @domInject('#valor')
    private _inputValue: JQuery;

    // private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _messageView = new MessageView('#messageView');

    private _service = new NegociacaoService();
    
    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    add() {

        // date verification
        let date = new Date(this._inputDate.val().replace(/-/g, ','))
        if(!this._isUtilDay(date)){
            this._messageView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        // Create a negociation
        const negociacao = new Negociacao(
            date,
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );
        
        // add negociation to negociation array and update to views
        this._negociacoes.add(negociacao);

        print(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._messageView.update('Negociação adicionada com sucesso');
    }

    // auxiliar function to date verification
    private _isUtilDay(date: Date): boolean {
        return date.getDay() != DaysOfTheWeek.Sunday 
            && date.getDay() != DaysOfTheWeek.Saturday;
    }

    @throttle()
    async importData() {
        try {
            let negociacoesToImport = await this._service.getNegociacoes(res => {
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                return res;
            });
            let currentNegociacoes = this._negociacoes.get();
    
            negociacoesToImport
            .filter( negociacao => !currentNegociacoes.some(current => negociacao.isEqual(current)))
            .forEach(negociacao => this._negociacoes.add(negociacao));
            
            this._negociacoesView.update(this._negociacoes);
            this._messageView.update('Negociações importadas com sucesso');
            //test
        } catch(err) {
            this._messageView.update(err.message)
        }
    }
        
}
enum DaysOfTheWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}