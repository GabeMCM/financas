export const getAll = {
  description: "Retorna todas as transações",
  tags: ["Transactions"],
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
              type: { type: "string" },
              valor: { type: "number" },
              date: { type: "string", format: "date-time" },
              userId: { type: "string" },
            },
          },
        },
      },
    },
  },
};
