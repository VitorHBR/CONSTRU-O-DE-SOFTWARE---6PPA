const express = require('express');
const RelatorioController = require('../controllers/relatorioController');
const Autenticacao = require('../middleware/autenticacao');

class RelatorioRoute {

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
        let ctrl = new RelatorioController;
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/buscarrelatorio',auth.usuarioEstaLogado, ctrl.buscarRelatorio);
        this.#router.post('/listarfetch',auth.usuarioEstaLogado, ctrl.listarJson);
    }
}




module.exports = RelatorioRoute;