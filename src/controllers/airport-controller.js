const { AirportService } = require("../services/index");
const airportService = new AirportService();
const create = async (req, res) => {
  try {
    console.log(req.body);
    const response = await airportService.create(req.body);
    console.log(req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully Created an Airport",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To create Airport",
      err: error,
    });
  }
};

module.exports = {
  create,
};
