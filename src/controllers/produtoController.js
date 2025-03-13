import produtoService from "../services/produtoService.js"

const listarTodos = async (req,res) => {
    try {
        const produtos = await produtoService.listarTodos()
         res.status(200).send(produtos);
    } catch (error) {
        res.send(`Erro na listagem de produtos ${error}`).status(500)
    }
}

const listarUsuario = async (req,res) => {
    try {
        const id = req.params.id
        const produtos = await produtoService.listarUsuario(id)
         res.status(200).send(produtos);
    } catch (error) {
        res.send(`Erro na listagem de produtos ${error}`).status(500)
    }
}

const criarUsuario = async (req,res) => {
    try {
        const produtos = await produtoService.criarUsuario(req.body)
        res.status(200).send("Usuário cadastrado com sucesso")
    } catch (error) {
        res.send(`Erro na criação de usuarios ${error}`).status(500)
    }
}
const atualizarUsuario = async (req,res) => {
    try {
        const produtos = await produtoService.atualizarUsuario(req.params.id,req.body)
        res.status(200).send("Usuário editado com sucesso")
    } catch (error) {
        res.send(`Erro na edição do usuarios ${error}`).status(500)
    }
}
const deletarUsuario = async (req,res) => {
    try {
        const produtos = await produtoService.deletarUsuario(req.params.id)
        res.status(200).send("Usuário Deletado com sucesso").status(200)
    } catch (error) {
        res.send(`Erro na deletado do usuarios ${error}`).status(500)
    }
}
export default {listarTodos,listarUsuario,criarUsuario,atualizarUsuario,deletarUsuario}