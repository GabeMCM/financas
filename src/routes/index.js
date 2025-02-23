import { userRoutes } from './user.routes.js';

export default async function (fastify, options) {
  fastify.register(userRoutes, { prefix: '/users' });
}
