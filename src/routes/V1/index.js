const express=require('express');
const {FlightMiddlewares} =require('../../middlewares/index');
const CityController=require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');
const router=express.Router();
//city Routes
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
 
//flight Routes
router.post('/flights',
FlightMiddlewares.validateCreateFlight,
FlightController.create
);
router.get('/flights',FlightController.getAll);

//airport Routes
router.post('/airports',AirportController.create);
module.exports=router;