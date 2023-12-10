import axios from "axios";
const useSetTokken=()=>{
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
    const {data}=await axios(config)
    window.localStorage.setItem("tokken",data.token)
    

    
}
return setToken

}
export default useSetTokken