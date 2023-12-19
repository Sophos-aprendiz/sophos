/* eslint-disable react-hooks/exhaustive-deps */
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { useEffect, useState } from "react";
import useSetTokken from "./useSetTokken";
const useGetUserId=()=>{
  const {accounts,inProgress}=useMsal();
  const [userId,setUserId]=useState("");
  const [loading,setLoading]=useState(true)
  const [tokken,tokkenLoading]=useSetTokken()
  
  
    
const getUserId=async()=>{
  try {
    let user

  if(inProgress=="none"){

    const email=accounts[0].username;
    user=email.split("@")[0]
  
    window.localStorage.setItem("user",user)
    
}


      var config = {
        method: 'get',
        url: `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetUserdIdbyUsername?userName=${user}`,
        headers: { 
          'Authorization': `Bearer ${tokken}`
        }
      };
const {data}=await axios(config)
const id=data.data.userId
setUserId(id)
window.localStorage.setItem("userId",id) 
setLoading(false)
    
  } catch (error) {
    console.log(error)
    
  }


}
useEffect(()=>{
  getUserId()
},[tokkenLoading,inProgress])



return {userId,loading,accounts}
}
export default useGetUserId