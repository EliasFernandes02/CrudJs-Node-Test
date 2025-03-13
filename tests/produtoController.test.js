// Importa o controller e o service para que possamos testá-los
import produtoController from "../src/controllers/produtoController.js";
import produtoService from "../src/services/produtoService.js";

// O Jest irá substituir (mockar) todas as funções exportadas de produtoService.
// Assim, evitamos chamadas reais ao banco de dados ou outras dependências externas.
jest.mock("../src/services/produtoService.js");

describe("Produto Controller", () => {
    let req, res; // Variáveis que vão simular os objetos request e response do Express

    // beforeEach é executado antes de cada teste individual,
    // garantindo que cada teste comece com objetos req e res "limpos".
    beforeEach(() => {
        // Inicializa o objeto req com as propriedades que podem ser necessárias
        req = { params: {}, body: {} };
        // Cria um objeto res simulado, onde 'status' e 'send' são funções mock.
        // O método status é configurado para retornar 'res' para permitir o encadeamento,
        // ou seja, podemos chamar res.status(...).send(...)
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });

    // Testa o método listarTodos do controller.
    // Esse teste simula o cenário de sucesso onde o serviço retorna uma lista de produtos.
    test("listarTodos deve retornar lista de produtos", async () => {
        // Define um array simulado de produtos que o serviço deve retornar.
        const mockProdutos = [{ id: 1, nome: "Produto 1" }];
        // Configura o mock para que, ao chamar produtoService.listarTodos(),
        // a Promise seja resolvida com o array mockProdutos.
        produtoService.listarTodos.mockResolvedValue(mockProdutos);

        // Chama o método listarTodos do controller passando os objetos simulados req e res.
        await produtoController.listarTodos(req, res);

        // Verifica se o método res.status foi chamado com o código 200 (sucesso).
        expect(res.status).toHaveBeenCalledWith(200);
        // Verifica se o método res.send foi chamado com o array de produtos esperado.
        expect(res.send).toHaveBeenCalledWith(mockProdutos);
    });

    // Testa o método listarUsuario do controller.
    // Aqui, simulamos que o serviço retorna produtos específicos para um usuário.
    test("listarUsuario deve retornar produtos de um usuário", async () => {
        // Define um array simulado de produtos.
        const mockProdutos = [{ id: 1, nome: "Produto 1" }];
        // Configura o mock do serviço para retornar esse array ao chamar listarUsuario.
        produtoService.listarUsuario.mockResolvedValue(mockProdutos);

        // Chama o método listarUsuario do controller.
        await produtoController.listarUsuario(req, res);

        // Verifica se o status 200 foi definido na resposta.
        expect(res.status).toHaveBeenCalledWith(200);
        // Verifica se o array de produtos retornado é o esperado.
        expect(res.send).toHaveBeenCalledWith(mockProdutos);
    });

    // Testa o método criarUsuario do controller.
    // Esse teste simula a criação de um usuário (ou produto, conforme o contexto) com sucesso.
    test("criarUsuario deve retornar mensagem de sucesso", async () => {
        // Configura o mock para que, ao chamar criarUsuario, a Promise seja resolvida sem erros.
        produtoService.criarUsuario.mockResolvedValue();

        // Chama o método criarUsuario do controller.
        await produtoController.criarUsuario(req, res);

        // Verifica se o status 200 foi definido, indicando sucesso na operação.
        expect(res.status).toHaveBeenCalledWith(200);
        // Verifica se a mensagem de sucesso foi enviada.
        expect(res.send).toHaveBeenCalledWith("Usuário cadastrado com sucesso");
    });
});
