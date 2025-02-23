import Fastify from 'fastify';
import routes from './src/routes/index.js';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

// Configurar CORS
await fastify.register(cors, {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// Registrar rotas
fastify.register(routes);

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 5500, host: '0.0.0.0' });
    console.log('🚀 Servidor rodando em http://localhost:5500');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
