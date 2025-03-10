export const create = {
  description: "Cria um novo usuário",
  tags: ["Users"], // 🔹 Categoria no Swagger
  body: {
    type: "object",
    required: ["name", "email", "username", "password"], // 🔥 Campos obrigatórios
    properties: {
      name: { type: "string" },
      email: { type: "string", format: "email" }, // 🔹 Valida como email
      username: { type: "string" },
      password: { type: "string", minLength: 6 }, // 🔹 Senha deve ter no mínimo 6 caracteres
      amount: { type: "number", default: 0 }, // 🔹 Valor inicial opcional
    },
  },
  response: {
    201: {
      description: "Usuário criado com sucesso",
      type: "object",
      properties: {
        success: { type: "boolean" },
        data: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            username: { type: "string" },
          },
        },
      },
    },
    400: {
      description: "Erro de validação",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
    500: {
      description: "Erro interno no servidor",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
        error: { type: "string" },
      },
    },
  },
};
