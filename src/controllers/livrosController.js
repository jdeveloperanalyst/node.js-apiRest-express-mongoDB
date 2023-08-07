import livros from "../models/Livro.js";

class LivroController{
    static listarLivros = (req, res) => {
        //O método de requisição HTTP GET é usado para recuperar informações de um servidor
        livros.find((err, livros) => {
        res.status(200).json(livros)
        })
    }
}


export default LivroController
