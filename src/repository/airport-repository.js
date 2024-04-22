const crudrepository = require("./crud-repository");
const { Airport } = require("../models/index");
class AirportRepository extends crudrepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
