const express = require('express');
const ReceitaController = require('../controllers/receitaController');
const Autenticacao = require('../middleware/autenticacao');

class ReceitaRoute {

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
        let ctrl = new ReceitaController
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/cadastrarreceita',auth.usuarioEstaLogado, ctrl.cadastrarReceita);
        this.#router.post('/alterarreceita',auth.usuarioEstaLogado, ctrl.alterarReceita);
        this.#router.post('/buscarreceita',auth.usuarioEstaLogado, ctrl.buscarReceita);
        this.#router.get('/deletarreceita/:codigo',auth.usuarioEstaLogado, ctrl.deletarReceita);
    }
}








module.exports = ReceitaRoute;