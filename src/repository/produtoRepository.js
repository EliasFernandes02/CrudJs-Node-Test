import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient

const listarTodos = async (req, res) => {
    return await prisma.user.findMany()
}

const listarUsuario = async (id) => {
    return await prisma.user.findUnique({
        where: { id: Number(id) }
    })
}

const criarUsuario = async ({ name, email, password }) => {
    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password

        }
    })
}


const atualizarUsuario = async ({ name, email, password }, id) => {
    return await prisma.user.update({
        where: { id: Number(id) },
        data: {
            name: name,
            email: email,
            password: password

        }
    })
}
const deletarUsuario = async (id) => {
    return await prisma.user.delete({
        where: { id: Number(id) }
    })
}


export default { listarTodos, listarUsuario, criarUsuario, atualizarUsuario, deletarUsuario }