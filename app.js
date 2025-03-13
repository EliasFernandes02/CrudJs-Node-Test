import express from "express"
import produtoRoutes from "./src/routes/produtoRoutes.js"
const PORT = 3000

const app = express()

app.use(express.json())

app.use("/usuarios",produtoRoutes)

app.listen(PORT,() =>{
    console.log(`Aplicação rodando na ${PORT}`)
})