const express = require('express');
const FuncionarioController = require('../controllers/funcionarioController');
const Autenticacao = require('../middleware/autenticacao');

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
        let auth = new Autenticacao();
        let ctrl = new FuncionarioController
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.post('/cadastrarfuncionario',auth.usuarioEstaLogado, ctrl.cadastrarFuncionario);
        this.#router.post('/alterarfuncionario',auth.usuarioEstaLogado, ctrl.alterarFuncionario);
        this.#router.post('/buscarfuncionario',auth.usuarioEstaLogado, ctrl.buscarFuncionario);
        this.#router.get('/deletarfuncionario/:idFuncionario',auth.usuarioEstaLogado, ctrl.deletarFuncionario);
    }
}



module.exports = FuncionarioRoute;