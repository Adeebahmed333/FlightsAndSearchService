class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in crud service");
    }
  }
  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      console.log("something went wrong in crud service");
    }
  }
  async get(id) {
    try {
      const response = await this.repository.findByPk(id);
      return response;
    } catch (error) {
      console.log("something went wrong in crud service");
    }
  }
  async getAll() {
    try {
      const response = await this.repository.findAll(data);
      return response;
    } catch (error) {
      console.log("something went wrong in crud service");
    }
  }
  async update(id, data) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (error) {
      console.log("something went wrong in crud service");
    }
  }
}

module.exports = CrudService;
