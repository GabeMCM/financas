import expenseService from "../services/expense.service.js";

// Listar todos os usuários
export async function handleGetAllexpenses(request, reply) {
  try {
    const expenses = await expenseService.getAllexpenses();
    reply.code(200).send(expenses);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao buscar usuários' });
  }
}

// Buscar um usuário por ID
export async function handleGetexpenseById(request, reply) {
  const { id } = request.params;
  try {
    const expense = await getexpenseById(id);
    if (!expense) {
      return reply.code(404).send({ error: 'Usuário não encontrado' });
    }
    reply.code(200).send(expense);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao buscar o usuário' });
  }
}

// Criar um novo usuário
export async function handleCreateexpense(request, reply) {
  const obj = request.body;
  try {
    const newexpense = await expenseService.createNewexpense(obj, obj.cpf);
    reply.code(201).send(newexpense);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao criar usuário' });
  }
}
