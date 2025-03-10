export const create = {
  description: "Cria uma nova transação",
  tags: ["Transactions"],
  body: {
    type: "object",
    properties: {
      type: { type: "string" },
      valor: { type: "number", minimum: 0 },
      date: { type: "string", format: "date-time" },
      userId: { type: "string" },
    },
    required: ["type", "valor", "date", "userId"],
  },
  response: {
    201: {
      description: "Transação criada com sucesso",
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
    400: {
      description: "Erro de validação",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
