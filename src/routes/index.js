import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        //Define a página principal da API
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes;