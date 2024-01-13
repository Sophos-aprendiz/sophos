import React, { useEffect,useState } from 'react'
import axios from 'axios'

const DeleteTimeEntry = () => {
    const [loading, setLoading]=useState(true)
    const authToken=window.localStorage.getItem("tokken"); 
    const drop=async ()=>{
        try{
           const url='https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/DeleteTimeEntry?IdTimeEntry=3065726&WHODIDIT=natalia.garciac'
           const headers={
            'Accept': 'application/json', 
            'Authorization': `Bearer ${authToken}` 
           }
           
           const response=await axios.delete(
            `${url}`,{'headers':headers}
           )
           
        }catch(error){
            console.log('Error:', error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(
        ()=>{
          drop();
        },[]
    )
  return (
    <>
    </>
  )
}

export default DeleteTimeEntry