export const getById = {
  description: "Busca um usuário por ID",
  tags: ["Users"],
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        data: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            amount: { type: "number" },
            username: { type: "string" },
          },
        },
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
  },
};
