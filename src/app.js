import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

//Cria a conexão
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

//Cria uma instância do express
const app = express();

app.use(express.json());

routes(app);

//Exporta este arquivo, para que outro arquivo possa fazer uso
export default app
