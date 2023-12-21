/* eslint-disable react/prop-types */
import "./TimeSheetItem.css"
const TimeSheetItem = ({areaName,clientName,projectName,categoryName,projectDescription,monday,tuesday,wednesday,thursday,friday,saturday,sunday,total}) => {
  return (
    <div className="timeSheetItem">
        <div>{areaName}</div>
        <div>{clientName}</div>
        <div>{projectName}</div>
        <div>{categoryName}</div>
        <div>{projectDescription}</div>
        <div>{monday}</div>
        <div>{tuesday}</div>
        <div>{wednesday}</div>
        <div>{thursday}</div>
        <div>{friday}</div>
        <div>{saturday}</div>
        <div>{sunday}</div>
        <div>{total}</div>

    </div>
  )
}

export default TimeSheetItem