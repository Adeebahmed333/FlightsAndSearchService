const express =require("express");
const {PORT} =require('./config/ServerConfig');  
const CityRepository =require('./repository/city-repository');
const SetupAndStartServer= async()=>
{
  //createing the express object
  const app=express();
  app.use(express.json());
  app.listen(PORT,async()=>
  {
   console.log(`Server Started at PORT ${PORT}`);
   const repo=new CityRepository();

  });

}

SetupAndStartServer();
