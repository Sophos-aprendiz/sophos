/* eslint-disable react-hooks/exhaustive-deps */
import NotAuthorized from "../../Components/NotAuthorized/NotAuthorized.jsx"
import Spinner from "../../Components/Spinner/Spinner.jsx";
import UIPanel from "../../Components/UIPanel/UIPanel.jsx";
import useGetUserId from "../../hooks/useGetUserId.jsx";


const Panel = () => {
    
    const {loading,error}=useGetUserId()
   
  

    if(loading){
        return (
            <Spinner/>
            )
    }
    else if(error)return <NotAuthorized/>
    else{
        return(
          <UIPanel/>
        )

    }
    

  
}

export default Panel