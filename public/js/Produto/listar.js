let listproduto;

function listarproduto()
{  
   
    const URL_TO_FETCH = '/produto/listarfetch';
   

fetch(URL_TO_FETCH).then(function(response) {
    response.json().then(function(data) {
      console.log(listproduto=data);
      
    });
  }).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
      
}