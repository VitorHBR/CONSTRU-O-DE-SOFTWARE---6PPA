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
        console.log(req.body);
        let prod = new ProdutoModel();

        
        prod.nome= req.body.nome;
        prod.descricao=req.body.descricao;
        prod.preco=req.body.preco;
        prod.receita_idReceita=req.body.receita;
        prod.Categoria_idCategoria=req.body.categoria;

        let retorno = await prod.cadastrarProdutos();
        let lista = await prod.listarProdutos();
        res.render('produto/listar', {lista: lista});
    }

    async deletarProduto(req, res) {
        console.log(req.params.codigo);
        //req.params.codigo
        let prod = new ProdutoModel();
        let retorno = await prod.deletarProduto(req.params.codigo);
        let lista = await prod.listarProdutos();
        res.render('produto/listar', {lista: lista});
        
    }
}

module.exports = ProdutoController;