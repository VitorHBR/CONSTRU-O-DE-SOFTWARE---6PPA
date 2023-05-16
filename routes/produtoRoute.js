const express = require('express');
const ProdutoController = require('../controllers/produtoController');

class ProdutoRoute {

    #router;
    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new ProdutoController
        this.#router.get('/', ctrl.listarView);
        this.#router.post('/cadastrarproduto', ctrl.cadastrarProduto);
        this.#router.get('/deletarproduto/:codigo', ctrl.deletarProduto);
    }
}








module.exports = ProdutoRoute;