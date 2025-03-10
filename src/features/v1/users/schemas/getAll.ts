export const getAll = {
  description: "Retorna todos os usuários com suas transações e despesas",
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
            transactions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  type: { type: "string" },
                  valor: { type: "number" },
                  date: { type: "string", format: "date-time" },
                },
              },
            },
            expenses: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  type: { type: "string" },
                  duration: { type: "number" },
                  valor: { type: "number" },
                },
              },
            },
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
