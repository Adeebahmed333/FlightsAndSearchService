const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
      console.log(error);
    }
  }

  async deleteCity(cityid) {
    try {
      const response = await this.cityRepository.deleteCity(cityid);
      return response;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
    }
  }

  async getCity(cityId, data) {
    try {
      const city = await this.cityRepository.getCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
    }
  }
  async getAllCities(filter) {
    try {
      const cities = this.cityRepository.getAllCities({ name: filter.name });
      return cities;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
    }
  }
}

module.exports = CityService;
