const Database = require('../db/database');

const conexao = new Database();
class ProdutoModel {
   
    
    #codigo_Produto;
    #nome;
    #descricao
    #preco;
    #quantidade;
    #receita_idReceita;
    #Categoria_idCategoria;
   
    

    get codigo_Produto() { return this.#codigo_Produto; } set codigo_Produto(codigo_Produto) {this.#codigo_Produto = codigo_Produto;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get descricao() { return this.#descricao; } set descricao(descricao) {this.#descricao = descricao;}
    get preco() { return this.#preco; } set preco(preco) {this.#preco = preco;}
    get quantidade() { return this.#quantidade; } set quantidade(quantidade) {this.#quantidade = quantidade;}
    get receita_idReceita() { return this.#receita_idReceita; } set receita_idReceita(receita_idReceita) {this.#receita_idReceita = receita_idReceita;}
    get Categoria_idCategoria() { return this.#Categoria_idCategoria; } set Categoria_idCategoria(Categoria_idCategoria) {this.#Categoria_idCategoria = Categoria_idCategoria;}
    
   

    constructor(codigo_Produto, nome, descricao, preco, quantidade, receita_idReceita, Categoria_idCategoria) {
        this.#codigo_Produto = codigo_Produto
        this.#nome = nome
        this.#descricao = descricao
        this.#preco = preco
        this.#quantidade = quantidade
        this.#receita_idReceita = receita_idReceita
        this.#Categoria_idCategoria = Categoria_idCategoria;
        
       
    }
        

    async listarProdutos() {

        let sql = 'SELECT * FROM produto LEFT JOIN categoria ON produto.Categoria_idCategoria = categoria.idCategoria LEFT JOIN receita ON produto.receita_idReceita = receita.idReceita';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ProdutoModel(row['codigo_Produto'], row['nome'], row['descricao'], row['preco'], row['quantidade'],row['receitanome'],row['categoriadescricao']));
                
                
            }
        }

        return listaRetorno;
    }


    async buscarProdutos() {

        let sql = "SELECT * FROM `produto` WHERE `nome` LIKE '%"+this.#nome+"%'";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ProdutoModel(row['codigo_Produto'], row['nome'], row['descricao'], row['preco'], row['quantidade'],row['receita_idReceita'],row['Categoria_idCategoria']));
                
                
            }
        }

        return listaRetorno;
    }



    async cadastrarProdutos() {

        let sql = "INSERT INTO `produto`(`nome`, `descricao`, `preco`, `quantidade`, `receita_idReceita`, `Categoria_idCategoria`) VALUES ('"+this.#nome+"','"+this.#descricao+"','"+this.#preco+"','"+this.#quantidade+"','"+this.receita_idReceita+"','"+this.#Categoria_idCategoria+"')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async deletarProduto(codigo) {

        let sql = "DELETE FROM `produto` WHERE `produto`.`codigo_Produto` = "+codigo;
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

    
    async alterarProdutos() {

        let sql = "UPDATE `produto` SET `nome` = '"+this.#nome+"', `descricao` = '"+this.#descricao+"', `preco` = '"+this.#preco+"', `quantidade` = '"+this.#quantidade+"', `receita_idReceita` = '"+this.receita_idReceita+"', `Categoria_idCategoria` = '"+this.#Categoria_idCategoria+"' WHERE `produto`.`codigo_Produto` = "+this.#codigo_Produto+"";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

}

module.exports = ProdutoModel;