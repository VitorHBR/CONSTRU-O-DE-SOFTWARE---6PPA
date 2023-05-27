const CategoriaModel = require("../models/categoriaModel");

class CategoriaController {

    async listarView(req, res) {
        let prod = new CategoriaModel();
        let lista = await prod.listarCategorias();
        res.render('categoria/listar', {lista: lista});
    }


    async buscarCategoria(req, res) {
        let prod = new CategoriaModel();
        prod.categoriaDescricao= req.body.busca;
        let lista = await prod.buscarCategorias();
        res.render('categoria/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let prod = new CategoriaModel();
        let lista = await prod.listarCategoria();
        res.send(lista);
    }

    async cadastrarCategoria(req, res) {
        console.log(req.body);
        let prod = new CategoriaModel();
  
        
        prod.categoriaDescricao=req.body.categoriaDescricao;

        let retorno = await prod.cadastrarCategorias();
        let lista = await prod.listarCategorias();
        res.render('categoria/listar', {lista: lista});
    }

    async deletarCategoria(req, res) {
        console.log(req.params.codigo);
        //req.params.codigo
        let prod = new CategoriaModel();
        let retorno = await prod.deletarCategorias(req.params.codigo);
        let lista = await prod.listarCategorias();
        res.render('categoria/listar', {lista: lista});
        
    }


    async alterarCategoria(req, res) {
        
        console.log(req.body);
        let prod = new CategoriaModel();

        prod.idCategoria= req.body.codigo
        prod.categoriaDescricao=req.body.categoriaDescricao;
        

        let retorno = await prod.alterarCategorias();
        let lista = await prod.listarCategorias();
        res.render('categoria/listar', {lista: lista});
    }
}

module.exports = CategoriaController;