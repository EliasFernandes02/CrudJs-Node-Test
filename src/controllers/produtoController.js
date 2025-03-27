import produtoService from "../services/produtoService.js"

const listarTodos = async (req, res) => {
    try {
        const produtos = await produtoService.listarTodos()
        res.status(200).send(produtos);
    } catch (error) {
        res.status(500).send(`Erro na listagem de produtos ${error}`)
    }
}

const listarUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const produtos = await produtoService.listarUsuario(id)
        res.status(200).send(produtos);
    } catch (error) {
        res.status(500).send(`Erro na listagem de produtos ${error}`)
    }
}

const criarUsuario = async (req, res) => {
    try {
        const produtos = await produtoService.criarUsuario(req.body)
        res.status(200).send("Usuário cadastrado com sucesso")
    } catch (error) {
        res.status(500).send(`Erro na criação de usuarios ${error}`)
    }
}
const atualizarUsuario = async (req, res) => {
    try {
        const produtos = await produtoService.atualizarUsuario(req.params.id, req.body)
        res.status(200).send("Usuário editado com sucesso")
    } catch (error) {
        res.status(500).send(`Erro na edição do usuarios ${error}`)
    }
}
const deletarUsuario = async (req, res) => {
    try {
        const produtos = await produtoService.deletarUsuario(req.params.id)
        res.status(200).send("Usuário Deletado com sucesso").status(200)
    } catch (error) {
        res.status(500).send(`Erro na deletado do usuarios ${error}`)
    }
}
export default { listarTodos, listarUsuario, criarUsuario, atualizarUsuario, deletarUsuario }