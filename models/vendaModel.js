const Database = require('../db/database');

const conexao = new Database();
class VendaModel {
   
    
    #idVenda;
    #data_hora;
    #forma_pagamento;
    #cliente_cpf_Cliente;
    #total;
    #produtos;
    #funcionario_idFuncionario;
   // #produtos;
   
    

    get idVenda() { return this.#idVenda; } set idVenda(idVenda) {this.#idVenda = idVenda;}
    get data_hora() { return this.#data_hora; } set data_hora(data_hora) {this.#data_hora = data_hora;}
    get forma_pagamento() { return this.#forma_pagamento; } set forma_pagamento(forma_pagamento) {this.#forma_pagamento = forma_pagamento;}
    get cliente_cpf_Cliente() { return this.#cliente_cpf_Cliente; } set cliente_cpf_Cliente(cliente_cpf_Cliente) {this.#cliente_cpf_Cliente = cliente_cpf_Cliente;}
    get total() { return this.#total; } set total(total) {this.#total = total;}
    get produtos() { return this.#produtos; } set produtos(produtos) {this.#produtos = produtos;}
    get funcionario_idFuncionario() { return this.#funcionario_idFuncionario; } set funcionario_idFuncionario(funcionario_idFuncionario) {this.#funcionario_idFuncionario = funcionario_idFuncionario;}
    
    
   

    constructor(idVenda, data_hora, forma_pagamento, cliente_cpf_Cliente,total,produtos, funcionario_idFuncionario) {
        this.#idVenda = idVenda
        this.#data_hora = data_hora
        this.#forma_pagamento = forma_pagamento
        this.#cliente_cpf_Cliente = cliente_cpf_Cliente
        this.#total = total
        this.#produtos = produtos
        this.#funcionario_idFuncionario = funcionario_idFuncionario
        
        
       
    }
        

    async cadastrarVenda() {
        //cadastra a venda
        let sql = "INSERT INTO `venda` (`data_hora`, `valor_total`, `forma_pagamento`, `cliente_cpf_Cliente`, `funcionario_idFuncionario`) VALUES ('"+this.data_hora+"', '"+this.total+"', '"+this.forma_pagamento+"', '"+this.cliente_cpf_Cliente+"', '"+this.funcionario_idFuncionario+"')";
        
        var rows = await conexao.ExecutaComando(sql);
        

        for (let index = 0; index < this.produtos.length; index++) {
            sql="INSERT INTO `venda_has_produto` (`venda_idVenda`, `produto_codigo_Produto`, `venda_quantidade`, `valor_unitario`) VALUES ('"+rows.insertId+"', '"+this.produtos[index].produto+"', '"+this.produtos[index].quantidade+"', '"+this.produtos[index].valor/this.produtos[index].quantidade+"')";
            var venda_has_produto = await conexao.ExecutaComando(sql);


            



        //atualiza estoque

        sql = 'SELECT * FROM produto LEFT JOIN categoria ON produto.Categoria_idCategoria = categoria.idCategoria LEFT JOIN receita ON produto.receita_idReceita = receita.idReceita ORDER BY `produto`.`nome` ASC';
        
        var rowsproduto = await conexao.ExecutaComando(sql);

        //let listaRetorno = [];

        if(rowsproduto.length > 0){
            for(let i=0; i<rowsproduto.length; i++){
                var row = rowsproduto[i];
               // listaRetorno.push(new ProdutoModel(row['codigo_Produto'], row['nome'], row['descricao'], row['preco'], row['quantidade'],row['receitanome'],row['categoriaDescricao'],row['receita_idReceita'],row['Categoria_idCategoria']));
                if(row['codigo_Produto']==this.produtos[index].produto)
                {   var quantidade =row['quantidade']-this.produtos[index].quantidade;
                    
                    sql = "UPDATE `produto` SET `quantidade` = '"+quantidade+"' WHERE `produto`.`codigo_Produto` = "+this.produtos[index].produto+"";
                    
                    var atualiza = await conexao.ExecutaComando(sql);
                }
                
            }
        }
        }
        
       
      

        return true;
    }


 

}

module.exports = VendaModel;