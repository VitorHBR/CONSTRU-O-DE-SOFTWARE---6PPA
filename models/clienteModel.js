const Database = require('../db/database');

const conexao = new Database();
class ClienteModel {
   
    
    #cpf_Cliente;
    #nome;
    #telefone
    #email;
    #endereco;
   
    

    get cpf_Cliente() { return this.#cpf_Cliente; } set cpf_Cliente(cpf_Cliente) {this.#cpf_Cliente = cpf_Cliente;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get telefone() { return this.#telefone; } set telefone(telefone) {this.#telefone = telefone;}
    get email() { return this.#email; } set email(email) {this.#email = email;}
    get endereco() { return this.#endereco; } set endereco(endereco) {this.#endereco = endereco;}
    
   

    constructor(cpf_Cliente, nome, telefone, email, endereco) {
        this.#cpf_Cliente = cpf_Cliente
        this.#nome = nome
        this.#telefone = telefone
        this.#email = email
        this.#endereco = endereco
       
    }
        

    async listarClientes() {

        let sql = 'SELECT * FROM `cliente` ORDER BY `cliente`.`nome` ASC';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ClienteModel(row['cpf_Cliente'], row['nome'], row['telefone'], row['email'],row['endereco']));
                
            }
        }

        return listaRetorno;
    }


    async buscarClientes() {

        let sql = "SELECT * FROM `cliente` WHERE `nome` LIKE '%"+this.#nome+"%' ORDER BY `cliente`.`nome` ASC";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ClienteModel(row['cpf_Cliente'], row['nome'], row['telefone'], row['email'],row['endereco']));
                
                
            }
        }

        return listaRetorno;
    }



    async cadastrarClientes() {

        let sql = "INSERT INTO `cliente`(`cpf_Cliente`, `nome`, `telefone`, `email`, `endereco`) VALUES ('"+this.#cpf_Cliente+"', '"+this.#nome+"','"+this.#telefone+"','"+this.#email+"','"+this.endereco+"')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async deletarCliente(cpf) {

        let sql = "DELETE FROM `cliente` WHERE `cliente`.`cpf_Cliente` = '"+cpf+"'";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

    
    async alterarClientes() {
        let sql = "UPDATE `cliente` SET `nome` = ?, `telefone` = ?, `email` = ?, `endereco` = ? WHERE `cliente`.`cpf_Cliente` = ?";
      
        var values = [this.#nome, this.#telefone, this.#email, this.endereco, this.#cpf_Cliente];
      
        var rows = await conexao.ExecutaComando(sql, values);
      
        return true;
      }

}

module.exports = ClienteModel;