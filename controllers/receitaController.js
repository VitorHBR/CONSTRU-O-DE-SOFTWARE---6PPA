const ReceitaModel = require("../models/receitaModel");

class ReceitaController {

    async listarView(req, res) {
        let prod = new ReceitaModel();
        let lista = await prod.listarReceitas();
        res.render('receita/listar', {lista: lista});
    }


    async buscarReceita(req, res) {
        let prod = new ReceitaModel();
        prod.nome= req.body.busca;
        let lista = await prod.buscarReceitas();
        res.render('receita/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let prod = new ReceitaModel();
        let lista = await prod.listarReceitas();
        res.send(lista);
    }

    async cadastrarReceita(req, res) {
        console.log(req.body);
        let prod = new ReceitaModel();

        
        prod.nome= req.body.nome;
        prod.descricao=req.body.descricao;
        

        let retorno = await prod.cadastrarReceitas();
        let lista = await prod.listarReceitas();
        res.render('receita/listar', {lista: lista});
    }

    async deletarReceita(req, res) {
        console.log(req.params.codigo);
        //req.params.codigo
        let prod = new ReceitaModel();
        let retorno = await prod.deletarReceitas(req.params.codigo);
        let lista = await prod.listarReceitas();
        res.render('receita/listar', {lista: lista});
        
    }


    async alterarReceita(req, res) {
        
        console.log(req.body);
        let prod = new ReceitaModel();

        prod.idReceita= req.body.codigo
        prod.nome= req.body.nome;
        prod.descricao=req.body.descricao;
        

        let retorno = await prod.alterarReceitas();
        let lista = await prod.listarReceitas();
        res.render('receita/listar', {lista: lista});
    }
}

module.exports = ReceitaController;