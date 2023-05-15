const ProdutoModel = require("../models/produtoModel");

class ProdutoController {

    async listarView(req, res) {
        let prod = new ProdutoModel();
        let lista = await prod.listarProdutos();
        res.render('produto/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let prod = new ProdutoModel();
        let lista = await prod.listarProdutos();
        res.send(lista);
    }

    async cadastrarProduto(req, res) {
        
        let prod = new ProdutoModel();
        let retorno = await prod.cadastrarProdutos();
        let lista = await prod.listarProdutos();
        res.render('produto/listar', {lista: lista});
    }

    async deletarProduto(req, res) {
        console.log(req.params);
        let prod = new ProdutoModel();
        let retorno = await prod.deletarProduto();
        let lista = await prod.listarProdutos();
        res.render('produto/listar', {lista: lista});
    }
}

module.exports = ProdutoController;