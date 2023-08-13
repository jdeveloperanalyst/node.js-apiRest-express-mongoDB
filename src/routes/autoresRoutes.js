import express from "express";
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
 //O método de requisição HTTP GET é usado para recuperar informações de um servidor
 .get("/autores", AutorController.listarAutores)

 // Requisição de busca por id
 .get("/autores/:id", AutorController.listarAutorPorId)

 //O método de requisição HTTP POST é usado para enviar dados para um servidor
 .post("/autores", AutorController.cadastrarAutor)

 /*
 O método de requisição HTTP PUT é usado para enviar dados para um servidor
 com a intenção de atualizar ou criar um recurso específico
 */
 .put("/autores/:id", AutorController.atualizarAutor)
 
 //O método de requisição HTTP DELETE é utilizado para solicitar a remoção de um recurso específico no servidor.
 .delete("/autores/:id", AutorController.excluirAutor)

 export default router;
 