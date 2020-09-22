import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
$('.form').submit(controller.add.bind(controller));
$('#botao-importar').click(controller.importData.bind(controller));