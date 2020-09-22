import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {
  
  async getNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
    
    let res: Response = await fetch('http://localhost:8080/dados');
    handler(res);
    let data: NegociacaoParcial[] = await res.json();

    return data.map(data => new Negociacao(new Date(), data.vezes, data.montante));
  }
}
export interface HandlerFunction {
  
  (res: Response): Response;
}