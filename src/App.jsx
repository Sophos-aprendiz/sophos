/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";
import "./index.css"


const App = () => {
  const {instance,accounts}=useMsal()

  const handleLoginRedirect = () => {
     instance.loginRedirect(loginRequest).catch((error)=>console.log(error));
      };
if(accounts.length<1)handleLoginRedirect()
  return (
   

<>

     
    
</>
   
  );
};

export default App;
