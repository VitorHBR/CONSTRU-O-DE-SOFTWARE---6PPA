const express = require('express');
const VendaController = require('../controllers/vendaController');
const Autenticacao = require('../middleware/autenticacao');

class VendaRoute {

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
        let ctrl = new VendaController
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
       
    }
}




module.exports = VendaRoute;