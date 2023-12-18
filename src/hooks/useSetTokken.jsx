import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { useEffect, useState } from "react";
const useSetTokken=()=>{
  const [tokken,setTokken]=useState("")
  const [loading,setLoading]=useState(true)
  const {accounts}=useMsal();

var data = JSON.stringify({
  "user": "UserSophosChronus.Api",
  "password": "Sophos.2020*#"
});

var config = {
  method: 'post',
  url: 'https://testapp.sophossolutions.com/SophosApiChronus/api/Token',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
const setToken=async()=>{
if(accounts.length>0){

  const {data}=await axios(config)
  window.localStorage.setItem("tokken",data.token)
  setTokken(data.token)
  setLoading(false)
}

    
}
useEffect(()=>{
  setToken()
})
return [tokken,loading]

}
export default useSetTokken