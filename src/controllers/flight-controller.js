const {FlightService}=require('../services/index');

const flightService= new FlightService();

const create =async(req,res)=>{
    try {
        const flight =await flightService.createFlight(req.body);
        console.log(req.body);
        return res.status(201).json({
            data : flight,
            success :true,
            message : "Succesfully Created A flight",
            error :{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : "Not Able To Create Flight",
            err :error
        });
        
    }
}

 const getAll=async (req,res)=>{
    try {
        const response=await flightService.getFlightsData(req.query);
        return  res.status(201).json({
            data : response,
            success :true,
            message : "Succesfully fetched the flights",
            error :{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : "Not Able To fetch the Flights",
            err :error
        });
        
    }
 }
 
module.exports={
    create,
    getAll
}