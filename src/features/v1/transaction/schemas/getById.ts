export const getById = {
  description: "Retorna uma transação específica pelo ID",
  tags: ["Transactions"],
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
            type: { type: "string" },
            valor: { type: "number" },
            date: { type: "string", format: "date-time" },
            userId: { type: "string" },
          },
        },
      },
    },
    404: {
      description: "Transação não encontrada",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
