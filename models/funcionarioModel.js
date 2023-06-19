const Database = require('../db/database');

const conexao = new Database();
class FuncionarioModel {
   
    
    #idFuncionario;
    #nome;
    #telefone
    #endereco;
    #email;
    #senha;
    

   
    

    get idFuncionario() { return this.#idFuncionario; } set idFuncionario(idFuncionario) {this.#idFuncionario = idFuncionario;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get telefone() { return this.#telefone; } set telefone(telefone) {this.#telefone = telefone;}
    get email() { return this.#email; } set email(email) {this.#email = email;}
    get endereco() { return this.#endereco; } set endereco(endereco) {this.#endereco = endereco;}
    get senha() { return this.#senha; } set senha(senha) {this.#senha = senha;}

    
   

    constructor(idFuncionario, nome, telefone, endereco, email, senha) {
        this.#idFuncionario = idFuncionario
        this.#nome = nome
        this.#telefone = telefone
        this.#endereco = endereco
        this.#email = email
        this.#senha = senha
       
    }
        

    async listarFuncionarios() {

        let sql = 'SELECT * FROM `funcionario`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new FuncionarioModel(row['idFuncionario'], row['nome_funcionario'], row['telefone'],row['endereco'], row['email']));
                
            }
        }

        return listaRetorno;
    }


    async buscarFuncionarios() {

        let sql = "SELECT * FROM `funcionario` WHERE `nome_funcionario` LIKE '%"+this.#nome+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new FuncionarioModel(row['idFuncionario'], row['nome_funcionario'], row['telefone'],row['endereco'], row['email'],row['senha']));
                
                
            }
        }

        return listaRetorno;
    }



    async cadastrarFuncionarios() {

        let sql = "INSERT INTO `funcionario`(`idFuncionario`, `nome_funcionario`, `telefone`, `endereco`, `email`, `senha`) VALUES ('"+this.#idFuncionario+"', '"+this.#nome+"','"+this.#telefone+"','"+this.endereco+"','"+this.#email+"','"+this.#senha+"')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async deletarFuncionario(idFuncionario) {

        let sql = "DELETE FROM `funcionario` WHERE `funcionario`.`idFuncionario` = "+idFuncionario;
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

    
    async alterarFuncionarios() {
        let sql = "UPDATE `funcionario` SET `nome_funcionario` = ?, `telefone` = ?, `endereco` = ?, `email` = ? , `senha` = ? WHERE `funcionario`.`idFuncionario` = ?";
      
        var values = [this.#nome, this.#telefone, this.endereco, this.#email, this.senha, this.#idFuncionario];
      
        var rows = await conexao.ExecutaComando(sql, values);
      
        return true;
      }


      async autenticarFuncionario (usuario, senha) {
        const sql = "SELECT * FROM `funcionario` WHERE `email` LIKE '"+usuario+"' AND `senha` LIKE '"+senha+"'";
       
        var row = await conexao.ExecutaComando(sql);
        
        if(row.length > 0)
            return row;
        else 
            return null;
    } 

}

module.exports = FuncionarioModel;