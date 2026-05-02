import {useEffect,useState} from "react"
import axios from "axios"

function App(){

 const [notifications,setNotifications]=useState([])
 const [type,setType]=useState("")

const token=import.meta.env.VITE_TOKEN
const fetchNotifications=async()=>{

   let url="http://20.207.122.201/evaluation-service/notifications?page=1&limit=10"

   if(type){
     url+=`&notification_type=${type}`
   }

   const res=await axios.get(url,{
     headers:{
       Authorization:`Bearer ${token}`
     }
   })

   console.log(res.data)
   setNotifications(res.data.notifications || res.data)
 }

 useEffect(()=>{
   fetchNotifications()
 },[type])

 return(
   <div>
     <h1>Notifications</h1>

     <select onChange={(e)=>setType(e.target.value)}>
       <option value="">All</option>
       <option value="Event">Event</option>
       <option value="Result">Result</option>
       <option value="Placement">Placement</option>
     </select>

     {
       notifications && notifications.map((n)=>(
         <div key={n.ID || n.id}>
           <h3>{n.Type || n.type}</h3>
           <p>{n.Message || n.message}</p>
           <small>{n.Timestamp || n.timestamp}</small>
         </div>
       ))
     }
   </div>
 )
}

export default App