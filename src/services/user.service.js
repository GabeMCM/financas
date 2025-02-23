import userModel from "../db/user.data.js"

async function createNewUser(obj, id) {
  try {
    const data = await userModel.getAll();

    // Verifica se o ID já existe no banco de dados
    if (data.hasOwnProperty(id)) {
      return { success: false, message: `Usuário com ID ${id} já existe.` };
    }

    // Caso o ID não exista, salva o novo usuário
    await userModel.save(obj, id);
    return { success: true, message: 'Usuário criado com sucesso.', data: obj };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Erro ao salvar o usuário.', error: error };
  }
}


async function updateNewUser(obj, id) {
	try {
		await userModel.save(obj, id);
	} catch (saveError) {
		console.error(`Erro ao salvar o usuário: ${saveError}`);
	}
}

async function getAllUsers() {
	let data = '';
	try {
		data = await userModel.getAll();
	} catch (err) {
		console.log(err);
	}
	return data
}

async function findById(id, typeResult) {
	let data = '';
	try {
		data = await userModel.findById(id, typeResult)
	} catch (err) {
		console.log(err);
	}
	return data;
}

async function deleteById(id) {
	try {
		data = await userModel.deleteById(id)
	} catch (err) {
		console.log(err);
	}
}


export default {
	getAllUsers,
	createNewUser,
	findById,
	deleteById,
	updateNewUser
}