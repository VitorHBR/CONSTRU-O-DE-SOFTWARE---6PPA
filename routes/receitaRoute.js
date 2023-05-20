const express = require('express');
const ReceitaController = require('../controllers/receitaController');

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

        let ctrl = new ReceitaController
        this.#router.get('/', ctrl.listarView);
        this.#router.post('/cadastrarreceita', ctrl.cadastrarReceita);
        this.#router.post('/alterarreceita', ctrl.alterarReceita);
        this.#router.post('/buscarreceita', ctrl.buscarReceita);
        this.#router.get('/deletarreceita/:codigo', ctrl.deletarReceita);
    }
}








module.exports = ReceitaRoute;