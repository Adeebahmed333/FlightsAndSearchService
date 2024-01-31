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
module.exports={
    create
}