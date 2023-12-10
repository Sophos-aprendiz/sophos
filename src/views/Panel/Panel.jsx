/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../Components/Header/Header.jsx";
import Box from "../../Components/Box/Box.jsx";
import Date from "../../Components/Date/Date.jsx";
import Block from "../../Components/Block/Block.jsx";
import Line from "../../Components/Lines/Line.jsx"
import Input from "../../Components/Inputs/input.jsx";
import Desc from "../../Components/Descriptions/Desc.jsx";
import useSetTokken from "../../hooks/useSetTokken.jsx";
import useGetUserId from "../../hooks/useGetUserId.jsx";
import NotAuthorized from "../../Components/NotAuthorized/NotAuthorized.jsx";


const Panel = () => {
    const setTokken=useSetTokken()
    const {getUserId,accounts}=useGetUserId()
   
    setTokken()
    getUserId()

    if(accounts.length>0){
        return (
            <div>
                <Header email={accounts[0].username} />
                <Box/>
                <Date/>
                <Block/>
                <Line/>
                <Input/>
                <Desc/>
            </div>)
    }else{
        return(
            <NotAuthorized/>
        )

    }
    

  
}

export default Panel