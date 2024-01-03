/* eslint-disable react/prop-types */
import "./TimeSheetItem.css"
const TimeSheetItem = ({areaName,clientName,projectName,categoryName,projectDescription,monday,tuesday,wednesday,thursday,friday,saturday,sunday,total}) => {
  return (
    <div className="timeSheetItem">
      <div className="containerOne">
        <div>{areaName}</div>
        <div>{clientName}</div>
        <div>{projectName}</div>
        <div>{categoryName}</div>
      </div>
      <div className="containerTwo">
        <div>{projectDescription}</div>
      </div>
      <div className="containerThree">
        <div className="day">{monday}</div>
        <div className="day">{tuesday}</div>
        <div className="day">{wednesday}</div>
        <div className="day">{thursday}</div>
        <div className="day">{friday}</div>
        <div className="day">{saturday}</div>
        <div className="day">{sunday}</div>
        <div className="day">{total}</div>
      </div>
    </div>
  )
}

export default TimeSheetItem