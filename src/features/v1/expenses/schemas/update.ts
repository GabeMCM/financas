export const update = {
  description: "Atualiza uma despesa pelo ID",
  tags: ["Expenses"],
  params: {
    type: "object",
    properties: {
      id: { type: "string" }, // O ID da despesa deve ser informado.
    },
    required: ["id"],
  },
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      type: { type: "string" },
      duration: { type: "number", minimum: 1 },
      valor: { type: "number", minimum: 0 },
    },
  },
  response: {
    200: {
      description: "Despesa atualizada com sucesso",
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
    400: {
      description: "Erro de validação",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
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
