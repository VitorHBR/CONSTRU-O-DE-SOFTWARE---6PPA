const express = require('express');
const CategoriaController = require('../controllers/categoriaController');

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
        this.#router.get('/', ctrl.listarView);
        this.#router.post('/cadastrarcategoria', ctrl.cadastrarCategoria);
        this.#router.post('/alterarcategoria', ctrl.alterarCategoria);
        this.#router.post('/buscarcategoria', ctrl.buscarCategoria);
        this.#router.get('/deletarcategoria/:codigo', ctrl.deletarCategoria);
    }
}








module.exports = CategoriaRoute;