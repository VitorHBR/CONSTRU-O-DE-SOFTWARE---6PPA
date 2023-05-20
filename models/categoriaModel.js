const Database = require('../db/database');

const conexao = new Database();
class CategoriaModel {
   
    
    #idCategoria;
    #descricao;
         
    get idCategoria() { return this.#idCategoria; } set idCategoria(idCategoria) {this.#idCategoria = idCategoria;}
    get descricao() { return this.#descricao; } set descricao(descricao) {this.#descricao = descricao;}
    
   

    constructor(idCategoria,descricao) {
        this.#idCategoria = idCategoria;
        this.#descricao = descricao;     
        
        
       
    }
        

    async listarCategorias() {

        let sql = 'SELECT * FROM `categoria`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new CategoriaModel(row['idCategoria'], row['categoriadescricao']));
                
                
            }
        }

        return listaRetorno;
    }


    async buscarCategorias() {

        let sql = "SELECT * FROM `categoria` WHERE `categoriadescricao` LIKE '%"+this.descricao+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new CategoriaModel(row['idCategoria'], row['categoriadescricao']));
                
                
            }
        }

        return listaRetorno;
        
    }



    async cadastrarCategorias() {

        let sql = "INSERT INTO `categoria` (`idCategoria`, `categoriadescricao`) VALUES (NULL, '"+this.#descricao+"')";
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }


    async deletarCategorias(codigo) {

        let sql = "DELETE FROM categoria WHERE `categoria`.`idCategoria` = "+codigo;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

    
    async alterarCategorias() {

        let sql = "UPDATE `categoria` SET `descricao` = '"+this.#descricao+"' WHERE `categoria`.`idCategoria` = "+this.#idCategoria;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

}

module.exports = CategoriaModel;