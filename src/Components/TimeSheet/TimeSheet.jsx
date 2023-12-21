import { useState } from "react"
import useGetTimeSheet from "../../hooks/useGetTimeSheet"
import Spinner from "../Spinner/Spinner"
import TimeSheetItem from "../TimeSheetItem/TimeSheetItem"
import { useEffect } from "react"

export const TimeSheet = () => {
    const {timeSheet,loading}=useGetTimeSheet()
    const [timeSheets,setTimeSheets]=useState()
    useEffect(()=>{
        setTimeSheets(timeSheet)
        console.log(timeSheets);
    },[timeSheet])
    if(loading)return <Spinner/>
    else return (
        <div className="timesheet-container">

        {timeSheets?.map((time,index)=>{
            return(
                <TimeSheetItem  areaName={time.areaName} clientName={time.clientName} projectName={time.projectName} categoryName={time.categoryName} projectDescription={time.projectDescription} monday={time.monday} tuesday={time.tuesday} wednesday={time.wednesday} thursday={time.thursday} friday={time.friday} saturday={time.saturday} sunday={time.sunday} total={time.total}   key={index} />
            )
        })}

        </div>
    )
}
