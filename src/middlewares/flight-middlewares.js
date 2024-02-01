const {ClientErrors}=require('../Utils/error-codes');
const validateCreateFlight=(req,res,next)=>{
  if(
    !req.body.flightNumber ||
    !req.body.airplaneId  ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
    )
    {
            return res.status(ClientErrors.BAD_REQUEST).json({
                data:{},
                success:false,
                message:"Invalid Request Body To Create Flight",
                err:"Missing Mandatory Properties To Create Flight"
            });
    }
    next();
}

module.exports={
    validateCreateFlight
}