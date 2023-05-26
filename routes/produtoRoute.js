const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const Autenticacao = require('../middleware/autenticacao');

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
        let auth = new Autenticacao();
        let ctrl = new ProdutoController
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/cadastrarproduto',auth.usuarioEstaLogado, ctrl.cadastrarProduto);
        this.#router.post('/alterarproduto',auth.usuarioEstaLogado, ctrl.alterarProduto);
        this.#router.post('/buscarproduto',auth.usuarioEstaLogado, ctrl.buscarProduto);
        this.#router.get('/deletarproduto/:codigo',auth.usuarioEstaLogado, ctrl.deletarProduto);
    }
}








module.exports = ProdutoRoute;