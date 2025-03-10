export const update = {
  description: "Atualiza uma transação pelo ID",
  tags: ["Transactions"],
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
  body: {
    type: "object",
    properties: {
      type: { type: "string" },
      valor: { type: "number", minimum: 0 },
      date: { type: "string", format: "date-time" },
    },
  },
  response: {
    200: {
      description: "Transação atualizada com sucesso",
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
