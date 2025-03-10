export const update = {
  description: "Atualiza um usuário por ID",
  tags: ["Users"], // 🔹 Categoria no Swagger
  params: {
    type: "object",
    properties: {
      id: { type: "string" }, // 🔹 ID obrigatório na URL
    },
    required: ["id"], // 🔥 Torna obrigatório
  },
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string", format: "email" }, // 🔹 Valida como email
      username: { type: "string" },
      password: { type: "string", minLength: 6 }, // 🔹 Senha deve ter no mínimo 6 caracteres
      amount: { type: "number" },
    },
  },
  response: {
    200: {
      description: "Usuário atualizado com sucesso",
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
            amount: { type: "number" },
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
    404: {
      description: "Usuário não encontrado",
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
