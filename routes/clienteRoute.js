const express = require('express');
const ClienteController = require('../controllers/clienteController');
const Autenticacao = require('../middleware/autenticacao');

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
        let auth = new Autenticacao();
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/cadastrarcliente',auth.usuarioEstaLogado, ctrl.cadastrarCliente);
        this.#router.post('/alterarcliente',auth.usuarioEstaLogado, ctrl.alterarCliente);
        this.#router.post('/buscarcliente',auth.usuarioEstaLogado, ctrl.buscarCliente);
        this.#router.get('/deletarcliente/:cpf',auth.usuarioEstaLogado, ctrl.deletarCliente);
    }
}



module.exports = ClienteRoute;