const express = require('express');
const InsumoController = require('../controllers/insumoController');
const Autenticacao = require('../middleware/autenticacao');

class InsumoRoute {

    #router;
    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new InsumoController
        let auth = new Autenticacao();
        this.#router.get('/',auth.usuarioEstaLogado, ctrl.listarView);
        this.#router.get('/listarfetch',auth.usuarioEstaLogado, ctrl.listarJson);
        this.#router.post('/buscarinsumo',auth.usuarioEstaLogado, ctrl.buscarInsumo);
        this.#router.post('/cadastrarinsumo',auth.usuarioEstaLogado, ctrl.cadastrarInsumo);
        this.#router.get('/deletarinsumo/:codigo',auth.usuarioEstaLogado, ctrl.deletarInsumo);
        this.#router.post('/alterarinsumo',auth.usuarioEstaLogado, ctrl.alterarInsumo);
       

        
    }
}





module.exports = InsumoRoute;