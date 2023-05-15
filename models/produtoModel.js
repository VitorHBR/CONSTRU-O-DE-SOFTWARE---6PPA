const Database = require('../db/database');

const conexao = new Database();
class ProdutoModel {

    
    #codigo_Produto;
    #nome;
    #descricao
    #preco;
    #receita_idReceita;
    #Categoria_idCategoria;
    
    

    get codigo_Produto() { return this.#codigo_Produto; } set codigo_Produto(codigo_Produto) {this.#codigo_Produto = codigo_Produto;}
    get nome() { return this.#nome; } set nome(nome) {this.#nome = nome;}
    get descricao() { return this.#descricao; } set descricao(descricao) {this.#descricao = descricao;}
    get preco() { return this.#preco; } set preco(preco) {this.#preco = preco;}
    get receita_idReceita() { return this.#receita_idReceita; } set receita_idReceita(receita_idReceita) {this.#receita_idReceita = receita_idReceita;}
    get Categoria_idCategoria() { return this.#Categoria_idCategoria; } set Categoria_idCategoria(Categoria_idCategoria) {this.#Categoria_idCategoria = Categoria_idCategoria;}
    

    constructor(codigo_Produto, nome,descricao, preco, receita_idReceita, Categoria_idCategoria) {
        this.#codigo_Produto = codigo_Produto
        this.#nome = nome
        this.#descricao = descricao
        this.#preco = preco
        this.#receita_idReceita = receita_idReceita
        this.#Categoria_idCategoria = Categoria_idCategoria;
       
    }


    async listarProdutos() {

        let sql = 'SELECT * FROM `produto`';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new ProdutoModel(row['codigo_Produto'], row['nome'], row['descricao'], row['preco'],row['receita_idReceita'],row['Categoria_idCategoria']));
            }
        }

        return listaRetorno;
    }



    async cadastrarProdutos() {

        let sql = "INSERT INTO `produto`(`codigo_Produto`, `nome`, `descricao`, `preco`, `receita_idReceita`, `Categoria_idCategoria`) VALUES ('6','feijao','ingrediente receita','10','6','6')";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }


    async deletarProduto() {

        let sql = "DELETE FROM `produto` WHERE `produto`.`codigo_Produto` = 6 AND `produto`.`receita_idReceita` = 6 AND `produto`.`Categoria_idCategoria` = 6";
        
        var rows = await conexao.ExecutaComando(sql);

        return true;
    }

}

module.exports = ProdutoModel;