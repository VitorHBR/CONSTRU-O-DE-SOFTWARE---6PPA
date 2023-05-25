const Database = require('../db/database');

const conexao = new Database();
class FuncionarioModel {
   
    
    #idfuncionario;
    #nome;
    #telefone
    #email;
    #endereco;
    #departamento;
    #cargo;

   
    

    get idfuncionario() { return this.#idfuncionario; } set idfuncionario(idfuncionario) {this.#idfuncionario = idfuncionario;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get telefone() { return this.#telefone; } set telefone(telefone) {this.#telefone = telefone;}
    get email() { return this.#email; } set email(email) {this.#email = email;}
    get endereco() { return this.#endereco; } set endereco(endereco) {this.#endereco = endereco;}
    get departamento() { return this.#departamento; } set departamento(departamento) {this.#departamento = departamento;}
    get cargo() { return this.#cargo; } set cargo(cargo) {this.#cargo = cargo;}

    
   

    constructor(idfuncionario, nome, telefone, email, endereco, departamento, cargo) {
        this.#idfuncionario = idfuncionario
        this.#nome = nome
        this.#telefone = telefone
        this.#email = email
        this.#endereco = endereco
        this.#departamento = departamento
        this.#cargo = cargo
       
    }
        

    async listarFuncionarios() {

        let sql = 'SELECT * FROM `funcionario`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new FuncionarioModel(row['idFuncionario'], row['nome'], row['telefone'], row['email'],row['endereco'],row['departamento'],row['cargo']));
                
            }
        }

        return listaRetorno;
    }


    async buscarFuncionarios() {

        let sql = "SELECT * FROM `funcionario` WHERE `nome` LIKE '%"+this.#nome+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new FuncionarioModel(row['idFuncionario'], row['nome'], row['telefone'], row['email'],row['endereco'],row['departamento'],row['cargo']));
                
                
            }
        }

        return listaRetorno;
    }



    async cadastrarFuncionarios() {

        let sql = "INSERT INTO `funcionario`(`idFuncionario`, `nome`, `telefone`, `email`, `endereco`, `departamento`, `cargo`) VALUES ('"+this.#idfuncionario+"', '"+this.#nome+"','"+this.#telefone+"','"+this.#email+"','"+this.endereco+"','"+this.departamento+"','"+this.cargo+"')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async deletarFuncionario(idfuncionario) {

        let sql = "DELETE FROM `funcionario` WHERE `funcionario`.`idFuncionario` = "+idfuncionario;
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

    
    async alterarFuncionarios() {
        let sql = "UPDATE `funcionario` SET `nome` = ?, `telefone` = ?, `email` = ?, `endereco` = ?, `departamento` = ?,  `cargo` = ? WHERE `funcionario`.`idFuncionario` = ?";
      
        var values = [this.#nome, this.#telefone, this.#email, this.endereco, this.departamento, this.cargo, this.#idfuncionario];
      
        var rows = await conexao.ExecutaComando(sql, values);
      
        return true;
      }

}

module.exports = FuncionarioModel;