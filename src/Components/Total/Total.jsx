import { useContext } from "react";
import "./Total.css";
import { TimeSheetContext } from "../context";

const Total = () => {
  const { total } = useContext(TimeSheetContext);
  return (
    <tbody>
      {total.map((section, index) => (
        <tr key={index}>
          <td colSpan={3}>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              {section.name}
            </p>
          </td>

          <td>
            <p className="text-timesheet">{section.hours.monday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.tuesday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.wednesday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.thursday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.friday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.saturday}</p>
          </td>
          <td>
            <p className="text-timesheet">{section.hours.sunday}</p>
          </td>

          <td>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              {section.hours.total}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Total;
