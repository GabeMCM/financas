export const deleteId = {
  description: "Deleta uma despesa pelo ID",
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
      description: "Despesa deletada com sucesso",
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
