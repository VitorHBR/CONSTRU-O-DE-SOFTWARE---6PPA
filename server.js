//importando os packages instalados
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const HomeRoute = require('./routes/homeRoute');
const ProdutoRoute = require('./routes/produtoRoute');
const CategoriaRoute = require('./routes/categoriaRoute');
const ReceitaRoute = require('./routes/receitaRoute');
const RelatorioRoute = require('./routes/relatorioRoute');
const ClienteRoute = require ('./routes/clienteRoute');
const FuncionarioRoute = require ('./routes/funcionarioRoute');
const VendaRoute = require ('./routes/vendaRoute');
const InsumoRoute = require ('./routes/insumoRoute');
const LoginRoute = require('./routes/loginRoute');


const app = express();

//configurando a nossa pasta public como o nosso repositorio de arquivos estáticos (css, js, imagens)
app.use(express.static(__dirname + "/public"))
//configuração das nossas views para utilizar a ferramenta EJS
app.set('view engine', 'ejs');
//Configuração de onde ficará nossas views
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração da nossa página de layout
app.set('layout', './layout');
app.use(expressLayouts);

//definindo as rotas que o nosso sistema vai reconhecer através da url do navegador
let homeRota = new HomeRoute();
app.use('/', homeRota.router)
let produtoRota = new ProdutoRoute();
app.use('/produto', produtoRota.router);
let categoriaRota = new CategoriaRoute();
app.use('/categoria', categoriaRota.router);
let receitaRota = new ReceitaRoute();
app.use('/receita', receitaRota.router);
let clienteRota = new ClienteRoute();
app.use('/cliente', clienteRota.router);
let funcionarioRota = new FuncionarioRoute();
app.use('/funcionario', funcionarioRota.router);
let vendaRota = new VendaRoute();
app.use('/venda', vendaRota.router);
let relatorioRota = new RelatorioRoute();
app.use('/relatorio', relatorioRota.router);
let insumoRota = new InsumoRoute();
app.use('/insumo', insumoRota.router);

let loginRota = new LoginRoute();
app.use('/login', loginRota.router);


//ponto de inicio do nosso servidor web
const server = app.listen('5000', function() {
    console.log('Servidor web iniciado');
});
