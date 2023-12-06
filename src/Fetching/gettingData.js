 import axios from "axios";


 export const addTimeSlot = async(time,date)=>{
  
    try{
        const response = await axios.post("https://backend-appointment.onrender.com/createSlot",{date,time}, {
            headers: {
              "Content-Type": "application/json",
          
            }

        })
        if(response){
            console.log("slot sent")
        }

    }catch(error){
        console.error(error)
    }

 }


 export const getSlots = async(date)=>{
  
    try{
        console.log(date)
        const response = await axios.post("https://backend-appointment.onrender.com/getSlots",{date}, {
            headers: {
              "Content-Type": "application/json",
          
            }

        })
       
            // response.data.forEach((slot) => {
            //     console.log(slot.time);

                return response.data;
              
        

    }catch(error){
        console.error(error)
    }

 }