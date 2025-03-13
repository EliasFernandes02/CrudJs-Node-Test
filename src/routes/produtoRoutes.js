import express from "express"
import produtoController from "../controllers/produtoController.js"

const route = express.Router()

route.get("/listar", produtoController.listarTodos)
route.get("/listar/:id", produtoController.listarUsuario)
route.post("/", produtoController.criarUsuario)
route.put("/atualizar/:id", produtoController.atualizarUsuario)
route.delete("/:id", produtoController.deletarUsuario)

export default route