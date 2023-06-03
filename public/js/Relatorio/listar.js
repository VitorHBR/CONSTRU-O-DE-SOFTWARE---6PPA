var listrelatorio;


function listarrelatorio(cod)
{  var html ="";
   
    const URL_TO_FETCH = '/relatorio/listarfetch';

    var dados = {
        codigo: cod,
        
      }
   

fetch(URL_TO_FETCH, {
    method: 'post', // opcional
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  }).then(function(response) {
    response.json().then(function(data) {
      console.log(listrelatorio=data);
      
      for (let index = 0; index < listrelatorio.length; index++) {
        
        html= html+"<li class=\"list-group-item d-flex justify-content-between align-items-start\">"+
                    "<div class=\"ms-2 me-auto\">"+
                    "<div class=\"fw-bold\">"+listrelatorio[index][1]+"</div>"+
                    "Valor Unitário:"+listrelatorio[index][3]+
                    "</div>"+
                    "<span class=\"badge bg-primary rounded-pill\">Quant:"+listrelatorio[index][2]+"</span>"+
                    "</li>";
        
      }
      console.log(html);
      document.getElementById("listarelatorioexpandido").innerHTML=html;
    });

  }).catch(function(err) {
    console.error('Failed retrieving information', err);
  });

  



      
}