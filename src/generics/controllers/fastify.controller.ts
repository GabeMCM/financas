import { FastifyRequest, FastifyReply } from "fastify";
import * as TP from "../../types";

export class Controller<T> implements TP.IController<T, FastifyRequest, FastifyReply> {
  protected service: TP.IService<T>;

  constructor(service: TP.IService<T>) {
    this.service = service;
  }

  async getById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    try {
      const result = await this.service.getById(req.params.id);
      if (!result) return reply.status(404).send({ success: false, message: "Not Found" });
      reply.send({ success: true, data: result });
    } catch (error) {
      reply.status(500).send({ success: false, message: "Internal Server Error", error });
    }
  }

  async getAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await this.service.getAll(); // 🔥 Confirme que este método existe e funciona
      console.log("✅ Usuários encontrados:", users);
      console.log("tipo de users", typeof users);
      reply.send({ success: true, data: users });
    } catch (error: any) {
      console.error("❌ Erro no getAll:", error); // 🔥 Log detalhado do erro
      reply.status(500).send({ success: false, message: "Internal Server Error", error: error.message });
    }
  }

  async create(req: FastifyRequest<{ Body: T }>, reply: FastifyReply) {
    try {
      const data = req.body as T ;
      const result = await this.service.create(data);
      console.info("✅ Dado criado:", result);
      reply.status(201).send({ success: true, data: result });
    } catch (error) {
      reply.status(500).send({ success: false, message: "Internal Server Error", error });
      console.error("❌ Erro no create:", error);
    }
  }

  async update(req: FastifyRequest<{ Params: { id: string }; Body: Partial<T> }>, reply: FastifyReply) {
    try {
      const data = req.body as Partial<T> ;
      const result = await this.service.update(req.params.id, data);
      reply.send({ success: true, data: result });
    } catch (error) {
      reply.status(500).send({ success: false, message: "Internal Server Error", error });
    }
  }

  async delete(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    try {
      await this.service.delete(req.params.id);
      reply.status(204).send();
    } catch (error) {
      reply.status(500).send({ success: false, message: "Internal Server Error", error });
    }
  }
}
