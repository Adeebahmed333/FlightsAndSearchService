const express =require("express");
const {PORT} =require('./config/ServerConfig');
const SetupAndStartServer= async()=>
{
  //createing the express object
  const app=express();
  app.use(express.json());
  app.listen(PORT,()=>
  {
   console.log(`Server Started at PORT ${PORT} `)
  
  });
}

SetupAndStartServer();
