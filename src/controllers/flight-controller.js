const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../Utils/error-codes");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    //console.log(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Succesfully Created A flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getFlightsData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Succesfully fetched the flights",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To fetch the Flights",
      err: error,
    });
  }
};
const getFlight = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Succesfully fetched the flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To fetch the Flight",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Succesfully updated the flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To update the Flight",
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
  getFlight,
  update,
};
