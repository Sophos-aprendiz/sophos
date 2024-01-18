import { useContext } from "react";
import "./Total.css";
import { TimeSheetContext } from "../context";

const Total = () => {
  const { total } = useContext(TimeSheetContext);
  return (
    <tbody>
      {total.map((section, index) => (
        <tr key={index}>
          <td colSpan={3}>{section.name}</td>

          <td>{section.hours.monday}</td>
          <td>{section.hours.tuesday}</td>
          <td>{section.hours.wednesday}</td>
          <td>{section.hours.thursday}</td>
          <td>{section.hours.friday}</td>
          <td>{section.hours.saturday}</td>
          <td>{section.hours.sunday}</td>

          <td>
            <strong>{section.hours.total}</strong>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Total;
