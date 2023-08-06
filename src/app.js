import express from "express";

//Cria uma instância do express
const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
 ]

//Define os atributos para cada rota
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

//O método de requisição HTTP GET é usado para recuperar informações de um servidor
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

// Requisição de busca por id
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

//O método de requisição HTTP POST é usado para enviar dados para um servidor
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

/*
O método de requisição HTTP PUT é usado para enviar dados para um servidor
com a intenção de atualizar ou criar um recurso específico
*/
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

//Exporta este arquivo, para que outro arquivo possa fazer uso
export default app
