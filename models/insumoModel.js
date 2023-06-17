const Database = require('../db/database');

const conexao = new Database();
class InsumoModel {
   
    
    #idInsumo;
    #nome;
    #descricao
    #preco;
    #quantidade;
    

    get idInsumo() { return this.#idInsumo; } set idInsumo(idInsumo) {this.#idInsumo = idInsumo;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get descricao() { return this.#descricao; } set descricao(descricao) {this.#descricao = descricao;}
    get preco() { return this.#preco; } set preco(preco) {this.#preco = preco;}
    get quantidade() { return this.#quantidade; } set quantidade(quantidade) {this.#quantidade = quantidade;}
   
   

    constructor(idInsumo, nome, descricao, preco, quantidade) {
        this.#idInsumo = idInsumo
        this.#nome = nome
        this.#descricao = descricao
        this.#preco = preco
        this.#quantidade = quantidade
    
        
       
    }
        

    async listarInsumos() {

        let sql = 'SELECT * FROM `insumo` ORDER BY `insumo`.`nome` ASC';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new InsumoModel(row['idInsumo'], row['nome'], row['descricao'], row['preco'], row['quantidade']));
                
                
            }
        }

        return listaRetorno;
    }



    async buscarInsumos() {
        
        let sql = "SELECT * FROM `insumo` WHERE `nome` LIKE '%"+this.#nome+"%' ORDER BY `insumo`.`nome` ASC";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new InsumoModel(row['idInsumo'], row['nome'], row['descricao'], row['preco'], row['quantidade']));
                
                
            }
        }

        return listaRetorno;
    }


    async cadastrarInsumos() {

        let sql = "INSERT INTO `insumo`(`nome`, `descricao`, `preco`, `quantidade`) VALUES ('"+this.#nome+"','"+this.#descricao+"','"+this.#preco+"','"+this.#quantidade+"')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

    async deletarInsumos(codigo) {

        let sql = "DELETE FROM `insumo` WHERE `insumo`.`idInsumo` = "+codigo;
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async alterarInsumos() {

        let sql = "UPDATE `insumo` SET `nome` = '"+this.#nome+"', `descricao` = '"+this.#descricao+"', `preco` = '"+this.#preco+"', `quantidade` = '"+this.#quantidade+"' WHERE `insumo`.`idInsumo` = "+this.#idInsumo+"";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

}

module.exports = InsumoModel;