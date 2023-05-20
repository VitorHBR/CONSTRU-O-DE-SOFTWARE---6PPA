const express = require('express');
const ClienteController = require('../controllers/clienteController');

class ClienteRoute {

    #router;
    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new ClienteController
        this.#router.get('/', ctrl.listarView);
        this.#router.post('/cadastrarcliente', ctrl.cadastrarCliente);
        this.#router.post('/alterarcliente', ctrl.alterarCliente);
        this.#router.post('/buscarcliente', ctrl.buscarCliente);
        this.#router.get('/deletarcliente/:cpf', ctrl.deletarCliente);
    }
}



module.exports = ClienteRoute;