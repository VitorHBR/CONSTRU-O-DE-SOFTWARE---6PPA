const Database = require('../db/database');

const conexao = new Database();
class CategoriaModel {
   
    
    #idCategoria;
    #categoriaDescricao;
         
    get idCategoria() { return this.#idCategoria; } set idCategoria(idCategoria) {this.#idCategoria = idCategoria;}
    get categoriaDescricao() { return this.#categoriaDescricao; } set categoriaDescricao(categoriaDescricao) {this.#categoriaDescricao = categoriaDescricao;}
    
   

    constructor(idCategoria,categoriaDescricao) {
        this.#idCategoria = idCategoria;
        this.#categoriaDescricao = categoriaDescricao;     
        
        
       
    }
        


    
    async listarCategorias() {

        let sql = 'SELECT * FROM `categoria`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new CategoriaModel(row['idCategoria'], row['categoriaDescricao']));
                
                
            }
        }

        return listaRetorno;
    }


    async buscarCategorias() {

        let sql = "SELECT * FROM `categoria` WHERE `categoriaDescricao` LIKE '%"+this.categoriaDescricao+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new CategoriaModel(row['idCategoria'], row['categoriaDescricao']));
                
                
            }
        }

        return listaRetorno;
        
    }



    async cadastrarCategorias() {

        let sql = "INSERT INTO `categoria` (`idCategoria`, `categoriaDescricao`) VALUES (NULL, '"+this.#categoriaDescricao+"')";
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }


    async deletarCategorias(codigo) {

        let sql = "DELETE FROM categoria WHERE `categoria`.`idCategoria` = "+codigo;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

    
    async alterarCategorias() {

        let sql = "UPDATE `categoria` SET `categoriaDescricao` = '"+this.#categoriaDescricao+"' WHERE `categoria`.`idCategoria` = "+this.#idCategoria;
        
        var rows = await conexao.ExecutaComando(sql);
        
        return true;
    }

}


module.exports = CategoriaModel;