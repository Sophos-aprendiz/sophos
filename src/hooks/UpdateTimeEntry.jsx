import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateTimeEntry = () => {
    const [loading, setLoading]=useState(true)

   const update= async ()=>{
    try{
    const headers={ 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVXNlclNvcGhvc0Nocm9udXMuQXBpIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiVXNlclNvcGhvc0Nocm9udXMuQXBpQHNvcGhvc29sdXRpb25zLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmFkb3IiLCJuYmYiOjE3MDUxMDIyNjYsImV4cCI6MTcwNTEwNTg2NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0ODQ4IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0ODQ4In0.ybammBYRTV2Qfq1U5owy9PsvFPR_hmfc1s62TB3fzP4', 
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
    console.log('response: ',response.data);

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
    </>
  )
}

export default UpdateTimeEntry; 