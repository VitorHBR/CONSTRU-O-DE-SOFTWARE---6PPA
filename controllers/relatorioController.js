const RelatorioModel = require("../models/relatorioModel");

class RelatorioController {

    async listarView(req, res) {
        let prod = new RelatorioModel();
        let lista = await prod.listarRelatorio();
        res.render('relatorio/listar', {lista: lista});
    }


    async buscarRelatorio(req, res) {
        let relatorio = new RelatorioModel();
        relatorio.cliente= req.body.busca;
        let lista = await relatorio.buscarRelatorio();
        res.render('relatorio/listar', {lista: lista});
    }

   
}

module.exports = RelatorioController;