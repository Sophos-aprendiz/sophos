/* eslint-disable react-hooks/exhaustive-deps */

import { useMsal } from "@azure/msal-react";
import Spinner from "../../Components/Spinner/Spinner.jsx";
import UIPanel from "../../Components/UIPanel/UIPanel.jsx";


const Panel = () => {
    
    const {inProgress}=useMsal();
   
  

    if(inProgress!=="none"){
        return (
            <Spinner/>
            )
    }
    else{
        return(
          <UIPanel/>
        )

    }
    

  
}

export default Panel