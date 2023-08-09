import express from "express";
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
 //O método de requisição HTTP GET é usado para recuperar informações de um servidor
 .get("/livros", LivroController.listarLivros)

 // Requisição de busca por id
 .get("/livros/:id", LivroController.listarLivroPorId)

 //O método de requisição HTTP POST é usado para enviar dados para um servidor
 .post("/livros", LivroController.cadastrarLivro)

 /*
 O método de requisição HTTP PUT é usado para enviar dados para um servidor
 com a intenção de atualizar ou criar um recurso específico
 */
 .put("/livros/:id", LivroController.atualizarLivro)
 
 //O método de requisição HTTP DELETE é utilizado para solicitar a remoção de um recurso específico no servidor.
 .delete("/livros/:id", LivroController.excluirLivro)

 export default router;
 