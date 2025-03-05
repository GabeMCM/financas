import userService from "../services/user.service.js";

// Listar todos os usuários
export async function handleGetAllUsers(request, reply) {
	try {
		const users = await userService.getAllUsers();
		reply.code(200).send(users);
	} catch (error) {
		reply.code(500).send({ error: 'Erro ao buscar usuários' });
	}
}

// Buscar um usuário por ID
export async function handleGetUserById(request, reply) {
  const { id, type } = request.params;
	console.log(`Buscando ID: ${id}, Tipo de Resultado: ${type}`);

  try {
    const user = await userService.findById(id, type);
    if (!user) {
      return reply.code(404).send({ error: 'Usuário não encontrado' });
    }
    reply.code(200).send(user);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao buscar o usuário' });
  }
}

// Criar um novo usuário
export async function handleUpdateUser(request, reply) {
	const obj = request.body;
	console.log(obj);
	try {
		const newUser = await userService.updateNewUser(obj, obj.cpf);
		reply.code(201).send(newUser);
	} catch (error) {
		console.log(error);
		reply.code(500).send({ 
			erro: 'Erro ao atualizar usuário',
			error: error
		 });
	}
}

// Criar um novo usuário
export async function handleCreateUser(request, reply) {
  const obj = request.body;
  console.log(obj);

  try {
    const newUser = await userService.createNewUser(obj, obj.cpf);

    if (newUser.success) {
      // Usuário criado com sucesso
      reply.code(201).send({
        message: newUser.message,
        data: newUser.data
      });
    } else {
      // Usuário já existe ou ocorreu um erro
      const statusCode = newUser.message.includes('já existe') ? 409 : 400; // 409 = Conflito, 400 = Bad Request
      reply.code(statusCode).send({
        message: newUser.message,
        error: newUser.error || null
      });
    }
  } catch (error) {
    console.error(error);
    reply.code(500).send({
      error: 'Erro inesperado ao criar usuário.',
      details: error.message
    });
  }
}


export async function handleDeleteUserById(request, reply) {
	const {id} = request.params;
	console.log(`Deletando ID: ${id}`);
	try {
		await userService.deleteById(id);
		reply.code(201).send(`User ${id} has deleted`);
	} catch (error) {
		console.log(error);
		reply.code(500).send({ 
			erro: 'Erro ao criar usuário',
			error: error
		 });
	}
}
