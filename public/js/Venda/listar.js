function cadastrarvenda(date,total,formapagamento,cliente,funcionario,produtos)
{   
    funcionario= funcionario.replace("usuarioLogado=","");
    
    
   
    console.log(produtos);

    var dados = {
                  date: date,
                  total: total,
                  formapagamento: formapagamento,
                  cliente: cliente,
                  produtos: produtos,
                  funcionario: funcionario
                }
              

    const URL_TO_FETCH = '/venda/finalizarvenda';
   

    fetch(URL_TO_FETCH, {
        method: 'post', // opcional
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      })
      .then(function(response) {
        response.text()
        .then(function(result) {
          //console.log(result);
          
        })
          
      })
      .catch(function(err) { 
        console.error(err);
      });

      alert("Venda cadastrada com sucesso");
       window.location.reload();
}