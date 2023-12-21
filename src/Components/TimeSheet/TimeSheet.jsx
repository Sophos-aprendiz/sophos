/* eslint-disable react/prop-types */
import Spinner from "../Spinner/Spinner"
import TimeSheetItem from "../TimeSheetItem/TimeSheetItem"

export const TimeSheet = ({timeSheet,loading}) => {

    if(loading)return <Spinner/>
    else return (
        <div className="timesheet-container">

        {timeSheet?.map((time,index)=>{
            return(
                <TimeSheetItem  areaName={time.areaName} clientName={time.clientName} projectName={time.projectName} categoryName={time.categoryName} projectDescription={time.projectDescription} monday={time.monday} tuesday={time.tuesday} wednesday={time.wednesday} thursday={time.thursday} friday={time.friday} saturday={time.saturday} sunday={time.sunday} total={time.total}   key={index} />
            )
        })}

        </div>
    )
}
