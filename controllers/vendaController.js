const VendaModel = require("../models/vendaModel");

class VendaController {

    constructor() {

    }

    async listarView(req, res) {
        res.render('venda/listar', {});
    }

    async finalizarVenda(req, res) {
        console.log(req.body);
        
        const date = req.body.date;
        const cliente = req.body.cliente;
        const produtos = req.body.produtos;
        const total = req.body.total;
        const pagamento = req.body.formapagamento;
        const funcionario = req.body.funcionario;

        // instância do modelo de Venda
        const venda = new VendaModel();

        // Dados da venda
        venda.data_hora=date;
        venda.cliente_cpf_Cliente = cliente;
        venda.produtos = produtos;
        venda.total = total;
        venda.forma_pagamento = pagamento;
        venda.funcionario_idFuncionario= funcionario;

        let retorno = await venda.cadastrarVenda();

        return true;
    }
}



module.exports = VendaController;