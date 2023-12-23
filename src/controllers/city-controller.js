const {CityService} =require('../services/index');
const cityService=new CityService();
/**
 * for create request type should be POST
 * data should come from req.body 
 */
const create=async (req,res)=>{
  try {
    const city =await cityService.createCity(req.body);
    return res.status(201).json({
        data : city,
        success :true,
        message : "Succesfully Created A City",
        error :{}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data : {},
        success :false,
        message : "Not Able To Create City",
        err :error
    });
  }
}
//delete ->city/:id
const destroy= async (req,res)=>{
    try {
        const response =await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success :true,
            message : "Succesfully Deleted A City",
            error :{}
        });
    
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data : {},
        success :false,
        message : "Not Able To Delete  City",
        err :error
    }); 
    }
}
//GET->city/:id
const get= async(req,res)=>{
    try {
        const response =await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success :true,
            message : "Succesfully fetched A City",
            error :{} 
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data : {},
        success :false,
        message : "Not Able To Get City",
        err :error
    });
    }
}
//Patch->/city/:id ->req.body
const update=async (req,res)=>{
    try {
        const response =await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success :true,
            message : "Succesfully updated A City",
            error :{} 
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data : {},
        success :false,
        message : "Not Able To update City",
        err :error
    });
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}