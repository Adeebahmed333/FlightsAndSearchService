const {City} =require('../models/index');

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
            const city= await City.update(data,{
                where:{
                    id:cityId
                }
            });
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
   
}

module.exports = CityRepository;