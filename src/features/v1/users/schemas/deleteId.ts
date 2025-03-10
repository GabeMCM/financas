export const deleteId = {
  description: "Deleta um usuário por ID",
  tags: ["Users"], // 🔹 Categoria no Swagger
  params: {
    type: "object",
    properties: {
      id: { type: "string" }, // 🔹 ID obrigatório na URL
    },
    required: ["id"], // 🔥 Torna obrigatório
  },
  response: {
    204: {
      description: "Usuário deletado com sucesso",
      type: "null",
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
