const Database = require('../db/database');

const conexao = new Database();
class RelatorioModel {
   
    
    #idVenda;
    #data_hora;
    #valor_total;
    #forma_pagamento;
    #cliente;
    #funcionario;
         
    get idVenda() { return this.#idVenda; } set idVenda(idVenda) {this.#idVenda = idVenda;}
    get data_hora() { return this.#data_hora; } set data_hora(data_hora) {this.#data_hora = data_hora;}
    get valor_total() { return this.#valor_total; } set valor_total(valor_total) {this.#valor_total = valor_total;}
    get forma_pagamento() { return this.#forma_pagamento; } set forma_pagamento(forma_pagamento) {this.#forma_pagamento = forma_pagamento;}
    get cliente() { return this.#cliente; } set cliente(cliente) {this.#cliente = cliente;}
    get funcionario() { return this.#funcionario; } set funcionario(funcionario) {this.#funcionario = funcionario;}

    constructor(idVenda,data_hora,valor_total,forma_pagamento,cliente,funcionario) {
        this.#idVenda = idVenda;
        this.#data_hora = data_hora;
        this.#valor_total = valor_total;
        this.#forma_pagamento = forma_pagamento;
        this.#cliente = cliente; 
        this.#funcionario = funcionario;      
        
        
       
    }
        

    async listarRelatorio() {
        
        let sql = 'SELECT * FROM venda LEFT JOIN cliente ON venda.cliente_cpf_Cliente = cliente.cpf_Cliente LEFT JOIN funcionario ON venda.funcionario_idFuncionario = funcionario.idFuncionario ORDER BY `cliente`.`nome` ASC';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new RelatorioModel(row['idVenda'], row['data_hora'], row['valor_total'], row['forma_pagamento'], row['nome'], row['nome_funcionario']));
                
                
            }
        }

        return listaRetorno;
    }


    async buscarRelatorio() {

        let sql = "SELECT * FROM venda LEFT JOIN cliente ON venda.cliente_cpf_Cliente = cliente.cpf_Cliente LEFT JOIN funcionario ON venda.funcionario_idFuncionario = funcionario.idFuncionario WHERE `nome` LIKE '%"+this.cliente+"%' ORDER BY `cliente`.`nome` ASC";
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new RelatorioModel(row['idVenda'], row['data_hora'], row['valor_total'], row['forma_pagamento'], row['nome'], row['nome_funcionario']));
                
                
            }
        }

        return listaRetorno;
        
    }


}

module.exports = RelatorioModel;