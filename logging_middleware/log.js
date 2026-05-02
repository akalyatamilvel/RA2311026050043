const axios=require("axios")

async function Log(stack,level,packageName,message,token){
 try{
   await axios.post(
    "http://20.207.122.201/evaluation-service/logs",
    {
      stack,
      level,
      package:packageName,
      message
    },
    {
      headers:{
        Authorization:`Bearer ${token}`
     }
    }
   )
 }
 catch(err){
   console.log(err.message)
 }
}

module.exports=Log