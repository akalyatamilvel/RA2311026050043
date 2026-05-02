const axios=require("axios")

const token=import.meta.env.VITE_TOKEN
const priority={
 Placement:3,
 Result:2,
 Event:1
}

async function getNotifications(){
 try{
   const res=await axios.get(
    "http://20.207.122.201/evaluation-service/notifications",
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
   )

   const notifications=res.data.notifications

   const sorted=notifications.sort((a,b)=>{
     if(priority[b.Type]!==priority[a.Type]){
       return priority[b.Type]-priority[a.Type]
     }

     return new Date(b.Timestamp)-new Date(a.Timestamp)
   })

   const top10=sorted.slice(0,10)

   console.log(top10)

 }
 catch(err){
   console.log(err.message)
 }
}

getNotifications()