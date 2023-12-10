import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { useState } from "react";
const useGetUserId=()=>{
  const {accounts}=useMsal();
  const [userId,setUserId]=useState();
  
    
const getUserId=async()=>{
 let user
  if(accounts.length>0){

    const email=accounts[0].username;
    user=email.split("@")[0]
    window.localStorage.setItem("user",user)
    
}

const tokken=window.localStorage.getItem("tokken")

      var config = {
        method: 'get',
        url: `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetUserdIdbyUsername?userName=${user}`,
        headers: { 
          'Authorization': `Bearer ${tokken}`
        }
      };
const {data}=await axios(config)
const id=await data.data.userId
setUserId(id)
window.localStorage.setItem("userId",id) 
}
 

return {getUserId,userId,accounts}
}
export default useGetUserId