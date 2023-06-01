const vendaModel = require("../models/vendaModel");

class VendaController {

    constructor() {

    }

    async listarView(req, res) {
        res.render('venda/listar', {});
    }

    async finalizarVenda(req, res) {
        console.log(req.body);

        const cliente = req.body.cliente;
        const produtos = req.body.produtos;
        const total = req.body.total;
        const pagamento = req.body.pagamento;

        // instância do modelo de Venda
        const venda = new VendaModel();

        // Dados da venda
        venda.cliente_cpf_Cliente = cliente;
        venda.produtos = produtos;
        venda.total = total;
        venda.forma_pagamento = pagamento;
    }
}



module.exports = VendaController;