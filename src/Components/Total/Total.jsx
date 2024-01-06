import { useContext } from "react";
import "./Total.css";
import { TimeSheetContext } from "../context";

const Total = () => {
  const { total } = useContext(TimeSheetContext);
  return (
    <div className="container-total">
      {total.map((section, index) => (
        <div key={index} className="row">
          <div>{section.name}</div>
          <div className="container-hours">
            <div>{section.hours.monday}</div>
            <div>{section.hours.tuesday}</div>
            <div>{section.hours.wednesday}</div>
            <div>{section.hours.thursday}</div>
            <div>{section.hours.friday}</div>
            <div>{section.hours.saturday}</div>
            <div>{section.hours.sunday}</div>
            <strong>
              <div>{section.hours.total}</div>
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Total;
