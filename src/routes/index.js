import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        //Define a página principal da API
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;