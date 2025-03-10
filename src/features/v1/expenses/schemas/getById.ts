export const getById = {
  description: "Retorna uma despesa específica pelo ID",
  tags: ["Expenses"],
  params: {
    type: "object",
    properties: {
      id: { type: "string" }, // O ID da despesa deve ser uma string.
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
            type: { type: "string" },
            duration: { type: "number" },
            valor: { type: "number" },
            userId: { type: "string" },
          },
        },
      },
    },
    404: {
      description: "Despesa não encontrada",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
