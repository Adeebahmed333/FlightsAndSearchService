const express =require("express");
const {PORT} =require('./config/ServerConfig');  
const APIroutes=require('./routes/index');
const SetupAndStartServer= async()=>
{
  //createing the express object
  const app=express();
  app.use(express.json());
  app.listen(PORT,async()=>
  {
   console.log(`Server Started at PORT ${PORT}`);

   app.use('/api',APIroutes);

  });

}

SetupAndStartServer();
