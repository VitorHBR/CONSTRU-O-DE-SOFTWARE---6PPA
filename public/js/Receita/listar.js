function listarreceitacad()
{  const URL_TO_FETCH = '/receita/listarfetch';
   var html=" <option selected>Selecione a Receita</option>";

fetch(URL_TO_FETCH).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      for (var index = 0; index < data.length; index++) {
        html =html+" <option value="+data[index][0]+">"+data[index][1]+"</option>";
        
      }
      document.getElementById("receita").innerHTML=html;
    });
  }).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
      
}

function listarreceitaalt(cod)
{  const URL_TO_FETCH = '/receita/listarfetch';
   var html=" <option selected>Selecione a Receita</option>";

fetch(URL_TO_FETCH).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      for (var index = 0; index < data.length; index++) {
        html =html+" <option value="+data[index][0]+">"+data[index][1]+"</option>";
        
      }
      document.getElementById("receitaalt"+cod).innerHTML=html;
    });
  }).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
      
}

function cadastrarReceita(nome,descricao,modoPreparo,insumos)
{   
    funcionario= funcionario.replace("usuarioLogado=","");
    
    
   
    console.log(insumos);

    var dados = {
                 nome: nome,
                 descricao:descricao,
                 modoPreparo: modoPreparo,
                 insumos: insumos
                }
              

    const URL_TO_FETCH = '/receita/cadastrarreceita';
   

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

      alert("Receita cadastrada com sucesso");
       window.location.reload();
}


