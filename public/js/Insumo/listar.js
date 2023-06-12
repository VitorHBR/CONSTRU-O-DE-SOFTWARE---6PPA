function listarinsumo()
{  
   
    const URL_TO_FETCH = '/insumo/listarfetch';
   var html=" <option selected>Selecione um Insumo</option>";

fetch(URL_TO_FETCH).then(function(response) {
    response.json().then(function(data) {
     // console.log(data);
      for (var index = 0; index < data.length; index++) {
        html =html+" <option value="+data[index][0]+">"+data[index][1]+"</option>";
        
      }
      document.getElementById("insumo").innerHTML=html;
    });
  }).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
      
}