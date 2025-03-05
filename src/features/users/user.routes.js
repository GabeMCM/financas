import {
	handleGetAllUsers,
	handleGetUserById,
	handleCreateUser,
	handleDeleteUserById,
	handleUpdateUser
} from '../handlers/user.handler.js';

export async function userRoutes(fastify, options) {
	fastify.get('/', handleGetAllUsers);
	fastify.get('/search/id/:id/typeOfResult/:type', handleGetUserById);
	fastify.post('/create', handleCreateUser);
	fastify.delete('/del/id/:id', handleDeleteUserById);
	fastify.patch('/up/', handleUpdateUser);
}
