const express = require('express');
const FuncionarioController = require('../controllers/funcionarioController');

class FuncionarioRoute {

    #router;
    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new FuncionarioController
        this.#router.get('/', ctrl.listarView);
        this.#router.post('/cadastrarfuncionario', ctrl.cadastrarFuncionario);
        this.#router.post('/alterarfuncionario', ctrl.alterarFuncionario);
        this.#router.post('/buscarfuncionario', ctrl.buscarFuncionario);
        this.#router.get('/deletarfuncionario/:idfuncionario', ctrl.deletarFuncionario);
    }
}



module.exports = FuncionarioRoute;