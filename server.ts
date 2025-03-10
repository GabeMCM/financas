import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import db from "./src/generics/database/db";
import { registerRoutes } from "./src/utils/route.loader";

const port : number = 2458;
// Testa a conexão com o banco antes de iniciar
const testDatabase = async () => {
  try {
    await db.$connect();
    console.log("✅ Conectado ao banco de dados!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
};

// Iniciar fastify
const fastify: FastifyInstance = Fastify({
  logger: {
    level: "warn", // 🔥 Exibir apenas erros e avisos
    transport: {
      target: "pino-pretty", // 🔥 Deixa os logs mais organizados
      options: {
        ignore: "pid,hostname,time", // 🔥 Remove informações irrelevantes
      },
    },
  },
});

// 🔹 Configuração do Swagger
fastify.register(swagger, {
  swagger: {
    info: {
      title: "Minha API",
      description: "Documentação automática com Swagger",
      version: "1.0.0",
    },
    host: `localhost:${port}`,
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

fastify.register(swaggerUI, {
  routePrefix: "/docs",
  staticCSP: true,
  transformSpecificationClone: true,
});

// 🔹 Configurar CORS
const setupCors = async () => {
  await fastify.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
};

const loadRoutes = async () => {
  await registerRoutes(fastify);
};

// 🔹 Iniciar servidor
const start = async (port: number) => {
  try {
    await testDatabase();
    await setupCors();
    await loadRoutes();
    await fastify.listen({ port: port, host: "0.0.0.0" });
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// 🔹 Chamar a função start()
start(port);
