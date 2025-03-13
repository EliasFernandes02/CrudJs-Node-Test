import produtoRepository from "../repository/produtoRepository.js"

const listarTodos = async (req,res) => {
    return await produtoRepository.listarTodos()
}

const listarUsuario = async (id) => {

    return await produtoRepository.listarUsuario(id)
}

const criarUsuario = async (body) => {
    return await produtoRepository.criarUsuario(body)
}

const atualizarUsuario = async (id,body) => {
    
    return await produtoRepository.atualizarUsuario(body,id)
}

const deletarUsuario = async (id) => {
    
    return await produtoRepository.deletarUsuario(id)
}
export default {listarTodos,listarUsuario,criarUsuario,atualizarUsuario,deletarUsuario}