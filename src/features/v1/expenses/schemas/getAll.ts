export const getAll = {
  description: "Retorna todas as despesas",
  tags: ["Expenses"],
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        data: {
          type: "array",
          items: {
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
    },
  },
};
