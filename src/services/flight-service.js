const {FlightRepository,AirplaneRepository} =require('../repository/index');
const {compareTime} =require('../Utils/helper');

class FlightService
{
   constructor(){
      this.airplanerepository=new AirplaneRepository();
      this.flightrepository=new FlightRepository();
   }
    async createFlight(data)
    {
     try {
         if(!compareTime(data.arrivalTime,data.departureTime))
         {
         throw{error:"Arrival Time Cannot be less than departure time"};
         }
         const airplane=await this.airplanerepository.getAirplane(data.airplaneId);
         const flight=await this.flightrepository.createFlight({
            ...data,totalSeats:airplane.capacity
         }); 
        return flight;
      
     } catch (error) {
        console.log(error);
        console.log("Something Went Wrong In service Layer Code:99");
     }
    }

    async getFlightsData(data)
    {
      try {
         const flights=await this.flightrepository.getAllFlights(data);
         return flights;
      } catch (error) {
         console.log(error);
        console.log("Something Went Wrong In service Layer Code:99");
      }
      
    }
    
}
module.exports=FlightService;
