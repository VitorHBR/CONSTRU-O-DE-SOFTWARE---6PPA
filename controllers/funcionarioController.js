const FuncionarioModel = require("../models/funcionarioModel");

class FuncionarioController {

    async listarView(req, res) {
        let cli = new FuncionarioModel();
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }


    async buscarFuncionario(req, res) {
        let cli = new FuncionarioModel();
        cli.nome= req.body.busca;
        let lista = await cli.buscarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }

    async listarJson(req, res) {
        let cli = new FuncionarioModel();
        let lista = await cli.listarFuncionarios();
        res.send(lista);
    }

    async cadastrarFuncionario(req, res) {
        console.log(req.body);
        let cli = new FuncionarioModel();

        cli.idFuncionario = req.body.idFuncionario;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.endereco=req.body.endereco;
        cli.email=req.body.email;
        cli.senha=req.body.senha;
       



        let retorno = await cli.cadastrarFuncionarios();
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }

    async deletarFuncionario(req, res) {
        console.log(req.params.idFuncionario);
        //req.params.idFuncionario
        let cli = new FuncionarioModel();
        let retorno = await cli.deletarFuncionario(req.params.idFuncionario);
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
        
    }


    async alterarFuncionario(req, res) {
        
        console.log(req.body);
        let cli = new FuncionarioModel();

        cli.idFuncionario = req.body.idFuncionario;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.endereco=req.body.endereco;
        cli.email=req.body.email;
        cli.senha=req.body.senha;


        let retorno = await cli.alterarFuncionarios();
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }

    
}

module.exports = FuncionarioController;