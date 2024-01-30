const express =require("express");
const {PORT} =require('./config/ServerConfig');  
const APIroutes=require('./routes/index');
const db= require('./models/index');

const SetupAndStartServer= async()=>
{
  //createing the express object
  const app=express();
  app.use(express.json());
  app.use('/api',APIroutes);
  app.listen(PORT,async()=>
  {
   console.log(`Server Started at PORT ${PORT}`);
    if(process.env.SYNC_DB==true)
    {
      db.sequelize.sync({alter:true});
    }
  
  });

}

SetupAndStartServer();
