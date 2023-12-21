import axios from 'axios';
import { useEffect, useState } from 'react';
import useGetFirstWeek from './useGetFirstWeek';
import { formatDate } from '../utils/formatDate';

const useGetTimeSheet = () => {
    const [week]=useGetFirstWeek()
    const [timeSheet,setTimeSheet]=useState([])
    const [loading,setLoading]=useState(true)
    const [section,setSection]=useState("GetTimeEntries")

 const getTimeSheet=async()=>{
    setLoading(true)
    try {
        const authToken =window.localStorage.getItem("tokken")
        const userName=window.localStorage.getItem("user")
        const {data}= await axios.get(
          'https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/Section1-getTimeSheetsByUserAndSection',
          {
            params: {
              UserName: userName,
              Section: section,
              DataFilter: formatDate(week)
            },
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
    setTimeSheet(data.data)

    setLoading(false)
    console.log(timeSheet)
        
    } catch (error) {
        console.log(error)
    }
        
}

useEffect(()=>{
if(week)getTimeSheet()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[week,section])
  return {timeSheet,loading,setSection,section}
}

export default useGetTimeSheet