const Database = require('../db/database');

const conexao = new Database();
class ReceitaModel {
   
    
    #idReceita;
    #nome;
    #descricao;
    #modoPreparo;
         
    get idReceita() { return this.#idReceita; } set idReceita(idReceita) {this.#idReceita = idReceita;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get descricao() { return this.#descricao; } set descricao(descricao) {this.#descricao = descricao;}
    get modoPreparo() { return this.#modoPreparo; } set modoPreparo(modoPreparo) {this.#modoPreparo = modoPreparo;}
    
   

    constructor(idReceita, nome, descricao, modoPreparo) {
        this.#idReceita = idReceita;
        this.#nome = nome;
        this.#descricao = descricao;    
        this.#modoPreparo = modoPreparo;  
        
        
       
    }
        

    async listarReceitas() {

        let sql = 'SELECT * FROM `receita`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ReceitaModel(row['idReceita'], row['receitanome'], row['receitadescricao'], row['modoPreparo']));
                
                
            }
        }

        return listaRetorno;
    }


    async buscarReceitas() {

        let sql = "SELECT * FROM `receita` WHERE `receitanome` LIKE '%"+this.nome+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ReceitaModel(row['idReceita'], row['receitadescricao'], row['modoPreparo']));
                
                
            }
        }

        return listaRetorno;
        
    }



    async cadastrarReceitas() {

        let sql = "INSERT INTO `receita` (`idReceita`,  `receitanome`, `receitadescricao`, `modoPreparo`) VALUES (NULL, '"+this.#nome+"','"+this.#descricao+"','"+this.#modoPreparo+"')";
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }


    async deletarReceitas(codigo) {

        let sql = "DELETE FROM receita WHERE `receita`.`idReceita` = "+codigo;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

    
    async alterarReceitas() {

        let sql = "UPDATE `receita` SET `receitanome` = '"+this.#nome+"', `receitadescricao` = '"+this.#descricao+"', `modoPreparo` = '"+this.#modoPreparo+"' WHERE `receita`.`idReceita` = "+this.#idReceita;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

}

module.exports = ReceitaModel;