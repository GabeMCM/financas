import transationService from "../services/services.modules/transation.service.js";

// Listar todos os usuários
export async function handleGetAlltransations(request, reply) {
  try {
    const transations = await transationService.getAlltransations();
    reply.code(200).send(transations);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao buscar usuários' });
  }
}

// // Buscar um usuário por ID
// export async function handleGettransationById(request, reply) {
//   const { id } = request.params;
//   try {
//     const transation = await gettransationById(id);
//     if (!transation) {
//       return reply.code(404).send({ error: 'Usuário não encontrado' });
//     }
//     reply.code(200).send(transation);
//   } catch (error) {
//     reply.code(500).send({ error: 'Erro ao buscar o usuário' });
//   }
// }

// Criar um novo usuário
export async function handleCreatetransation(request, reply) {
  const obj = request.body;
  try {
    const newtransation = await transationService.createNewtransation(obj, obj.cpf);
    reply.code(201).send(newtransation);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao criar usuário' });
  }
}
