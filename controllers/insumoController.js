const InsumoModel = require("../models/insumoModel");
class InsumoController {

    async listarView(req, res) {
        let prod = new InsumoModel();
        let lista = await prod.listarInsumos();
        res.render('insumo/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let prod = new InsumoModel();
        let lista = await prod.listarInsumos();
        var retorno=[];
        for (var index = 0; index < lista.length; index++) 
        {  retorno.push([lista[index].idInsumo, lista[index].nome, lista[index].descricao, lista[index].preco, lista[index].quantidade]) ;
       
        }
        res.send(retorno);
    }
}

module.exports = InsumoController;