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


    async buscarInsumo(req, res) {
        let prod = new InsumoModel();
        prod.nome= req.body.busca;
        let lista = await prod.buscarInsumos();
        res.render('insumo/listar', {lista: lista});
    }


    async cadastrarInsumo(req, res) {
        console.log(req.body);
        let prod = new InsumoModel();

        
        prod.nome= req.body.nome;
        prod.descricao=req.body.descricao;
        prod.preco=req.body.preco;
        prod.quantidade=req.body.quantidade;
        

        let retorno = await prod.cadastrarInsumos();
        let lista = await prod.listarInsumos();
        res.render('insumo/listar', {lista: lista});
    }


    async deletarInsumo(req, res) {
        console.log(req.params.codigo);
        //req.params.codigo
        let prod = new InsumoModel();
        let retorno = await prod.deletarInsumos(req.params.codigo);
        let lista = await prod.listarInsumos();
        res.render('insumo/listar', {lista: lista});
        
    }

    async alterarInsumo(req, res) {
        
        console.log(req.body);
        let prod = new InsumoModel();

        prod.idInsumo= req.body.codigo;
        prod.nome= req.body.nome;
        prod.descricao=req.body.descricao;
        prod.preco=req.body.preco;
        prod.quantidade=req.body.quantidade;
       

        let retorno = await prod.alterarInsumos();
        let lista = await prod.listarInsumos();
        res.render('insumo/listar', {lista: lista});
    }
}

module.exports = InsumoController;