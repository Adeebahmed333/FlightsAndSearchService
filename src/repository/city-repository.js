const {City} =require('../models/index');
 const {Op}=require('sequelize');
class CityRepository{

    async createCity({name}){
        try {
            const city=City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something Went Wrong In repo Layer Code:99");
            //throw{error};
        }
    };

    async deleteCity(cityId){
        try {
            await City.destroy({
              where:{
                id: cityId
              }
            });
            return true;
        } catch (error) {
            console.log("Something Went Wrong In repo Layer Code:999");
        }
    };

    async updateCity(cityId,data){
        try {
            //this approach also works but will not return updated object 
            // const city= await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });
            //if you want the updated object you can use this approach
            //if we are using postgres sql then returning:true property can be used
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something Went Wrong In repo Layer Code:9999");
        }
    };

    async getCity(cityId){
        try {
            const city= await City.findByPk(cityId); 
            return city;
        } catch (error) {
            console.log("Something Went Wrong In repo Layer Code:99999");
        }
    };

    async getAllCities(filter)//filter can be empty if so then we return all cities
    {
        try {
            if(filter.name)
            {
              const cities=await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
              });
              return cities;
            }
            const cities =City.findAll();
            return cities;
        } catch (error) {
            console.log("Something Went Wrong In repo Layer Code:99999");  
            throw{error}; 
        }
    }
   
}

module.exports = CityRepository;