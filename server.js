import app from "./src/app.js";

//Criando servidor local.

/*
Define uma porta para escutar a requisição
para um ambiente de produção OU a porta fixa local.
*/
const port = process.env.PORT || 3000; 

//Define a porta que vai escutar a requisição e mandar a resposta.
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
