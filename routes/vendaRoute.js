const express = require('express');
const VendaController = require('../controllers/vendaController');

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

        let ctrl = new VendaController
        this.#router.get('/', ctrl.listarView);
       
    }
}




module.exports = VendaRoute;