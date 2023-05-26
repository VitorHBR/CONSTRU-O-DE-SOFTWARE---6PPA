
class VendaController {

    constructor() {

    }

    listarView(req, res) {
        res.render('venda/listar', {});
    }
}


module.exports = VendaController;