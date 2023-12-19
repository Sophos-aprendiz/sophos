/* eslint-disable react-hooks/exhaustive-deps */
import Spinner from "../../Components/Spinner/Spinner.jsx";
import UIPanel from "../../Components/UIPanel/UIPanel.jsx";
import useGetUserId from "../../hooks/useGetUserId.jsx";
import NotAuthorized from "../../Components/NotAuthorized/NotAuthorized.jsx"

const Panel = () => {
    
    const {loading,accounts}=useGetUserId()
   
  

    if(loading){
        return (
            <Spinner/>
            )
    }
    else if(accounts<0)return<NotAuthorized/>
    else{
        return(
          <UIPanel/>
        )

    }
    

  
}

export default Panel