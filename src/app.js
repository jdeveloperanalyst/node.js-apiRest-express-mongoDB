import express from "express";

//Cria uma instância do express
const app = express();

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

//Exporta este arquivo, para que outro arquivo possa fazer uso
export default app
