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

        cli.idfuncionario = req.body.idfuncionario;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.email=req.body.email;
        cli.endereco=req.body.endereco;
        cli.departamento=req.body.departamento;
        cli.cargo=req.body.cargo;



        let retorno = await cli.cadastrarFuncionarios();
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }

    async deletarFuncionario(req, res) {
        console.log(req.params.idfuncionario);
        //req.params.idfuncionario
        let cli = new FuncionarioModel();
        let retorno = await cli.deletarFuncionario(req.params.idfuncionario);
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
        
    }


    async alterarFuncionario(req, res) {
        
        console.log(req.body);
        let cli = new FuncionarioModel();

        cli.idfuncionario = req.body.idfuncionario;
        cli.nome= req.body.nome;
        cli.telefone=req.body.telefone;
        cli.email=req.body.email;
        cli.endereco=req.body.endereco;
        cli.departamento=req.body.departamento;
        cli.cargo=req.body.cargo;


        let retorno = await cli.alterarFuncionarios();
        let lista = await cli.listarFuncionarios();
        res.render('funcionario/listar', {lista: lista});
    }

    
}

module.exports = FuncionarioController;