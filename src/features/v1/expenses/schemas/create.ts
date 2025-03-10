export const create = {
  description: "Cria uma nova despesa",
  tags: ["Expenses"],
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      type: { type: "string" },
      duration: { type: "number", minimum: 1 }, // Garante que a duração seja no mínimo 1.
      valor: { type: "number", minimum: 0 }, // Garante que o valor não seja negativo.
      userId: { type: "string" },
    },
    required: ["name", "type", "duration", "valor", "userId"], // Todos são obrigatórios.
  },
  response: {
    201: {
      description: "Despesa criada com sucesso",
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
  },
};
