const ClienteModel = require("../models/clienteModel");

class ClienteController {

    async listarView(req, res) {
        let cli = new ClienteModel();
        let lista = await cli.listarClientes();
        res.render('cliente/listar', {lista: lista});
    }


    async buscarCliente(req, res) {
        let cli = new ClienteModel();
        cli.nome= req.body.busca;
        let lista = await cli.buscarClientes();
        res.render('cliente/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let prod = new ClienteModel();
        let lista = await prod.listarClientes();
        var retorno=[];
        for (var index = 0; index < lista.length; index++) 
        {  retorno.push([lista[index].cpf_Cliente,lista[index].nome]) ;
       
        }
        res.send(retorno);
    }

    async cadastrarCliente(req, res) {
        console.log(req.body);
        let cli = new ClienteModel();

        cli.cpf_Cliente = req.body.cpf;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.email=req.body.email;
        cli.endereco=req.body.endereco;

        let retorno = await cli.cadastrarClientes();
        let lista = await cli.listarClientes();
        res.render('cliente/listar', {lista: lista});
    }

    async deletarCliente(req, res) {
        console.log(req.params.cpf);
        //req.params.cpf
        let cli = new ClienteModel();
        let retorno = await cli.deletarCliente(req.params.cpf);
        let lista = await cli.listarClientes();
        res.render('cliente/listar', {lista: lista});
        
    }


    async alterarCliente(req, res) {
        
        console.log(req.body);
        let cli = new ClienteModel();

        cli.cpf_Cliente = req.body.cpf;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.email=req.body.email;
        cli.endereco=req.body.endereco;

        let retorno = await cli.alterarClientes();
        let lista = await cli.listarClientes();
        res.render('cliente/listar', {lista: lista});
    }
}

module.exports = ClienteController;