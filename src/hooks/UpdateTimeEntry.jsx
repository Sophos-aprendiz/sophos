import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateTimeEntry = () => {
    const [loading, setLoading]=useState(true)
    const authToken = window.localStorage.getItem("tokken");

   const update= async ()=>{
    try{
    const headers={ 
    'Authorization':`Bearer ${authToken}`, 
    'Accept': 'application/json', 
    'Content-Type': 'application/json-patch+json'
    }
    const url='https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/UpdateTimeEntry'
    const body={
        "categoryId": 37221,
        "timeEntryCreatorUserName": "natalia.garciac",
        "timeEntryDescription": "Prueba desde postman update",
        "timeEntryEstimateDuration": 0,
        "timeEntryEnteredDate": "2023-11-06",
        "timeEntryUserName": "natalia.garciac",
        "timeEntryMonday": 2,
        "timeEntryTuesday": 2,
        "timeEntryWednesday": 2,
        "timeEntryThursday": 2,
        "timeEntryFriday": 1,
        "timeEntrySaturday": 1,
        "timeEntrySunday": 1,
        "isCompensatory": true,
        "timeEntryId": 3065726,
        "mensaje": "string",
        "whodidit": "natalia.garciac"
    }

    const response=await axios.put(
        `${url}`,body,{'headers':headers}
    )
    console.log('response: ',response.data.data);

}catch(error){
    console.log(error)
 }finally{
      setLoading(false)
  }
}
useEffect(() => {
    update();
  }, []);

  return (
    <>
    {loading ? 'Cargando...' :null}
    </>
  )
}

export default UpdateTimeEntry; 