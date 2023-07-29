import express from "express";

//Cria uma instância do express
const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "Titulo": "O Hobiit"}
 ]

//Define os atributos para cada rota
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

//Exporta este arquivo, para que outro arquivo possa fazer uso
export default app
