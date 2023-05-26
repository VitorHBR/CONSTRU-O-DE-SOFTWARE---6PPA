const express = require('express');
const CategoriaController = require('../controllers/categoriaController');
const Autenticacao = require('../middleware/autenticacao');

class CategoriaRoute {

    #router;
    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new CategoriaController
        let auth = new Autenticacao();
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/cadastrarcategoria',auth.usuarioEstaLogado, ctrl.cadastrarCategoria);
        this.#router.post('/alterarcategoria',auth.usuarioEstaLogado, ctrl.alterarCategoria);
        this.#router.post('/buscarcategoria',auth.usuarioEstaLogado, ctrl.buscarCategoria);
        this.#router.get('/deletarcategoria/:codigo',auth.usuarioEstaLogado, ctrl.deletarCategoria);
    }
}








module.exports = CategoriaRoute;