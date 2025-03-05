export class Services {
  constructor(model, nameOfData, responseUtils) {
    this.nameOfData = nameOfData;
    this.model = model;
    this.responseUtils = responseUtils; // 💡 Agora `ResponseUtils` é injetado
  }

  async create(obj, id) {
    try {
      const data = await this.model.getAll();
      if (data.hasOwnProperty(id)) {
        return { success: false, message: `${this.nameOfData} com ID ${id} já existe.` };
      }
      await this.model.save(obj, id);
      return this.responseUtils.success(this.nameOfData, obj);
    } catch (error) {
      return this.responseUtils.error(this.nameOfData, error);
    }
  }

  async update(obj, id) {
    try {
      await this.model.save(obj, id);
      return this.responseUtils.success(this.nameOfData, obj); // 💡 Agora tem return
    } catch (error) {
      return this.responseUtils.error(this.nameOfData, error);
    }
  }

  async getAll() {
    try {
      const data = await this.model.getAll();
      return this.responseUtils.success(this.nameOfData, data); // 💡 Agora retorna o dado correto
    } catch (error) {
      return this.responseUtils.error(this.nameOfData, error);
    }
  }

  async findById(id, typeResult) {
    try {
      const data = await this.model.findById(id, typeResult);
      return this.responseUtils.success(this.nameOfData, data);
    } catch (error) {
      return this.responseUtils.error(this.nameOfData, error);
    }
  }

  async deleteById(id) {
    try {
      await this.model.deleteById(id);
      return this.responseUtils.success(this.nameOfData);
    } catch (error) {
      return this.responseUtils.error(this.nameOfData, error);
    }
  }
}
