/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import TimeSheetItem from "../TimeSheetItem/TimeSheetItem";
import { TimeSheetContext } from "../context";
import Spinner from "../Spinner/Spinner";

export const TimeSheet = () => {
  const { selectTimesheet, loading } = useContext(TimeSheetContext);

  return (
    <div className="timesheet-container">
      {loading ? (
        <Spinner />
      ) : (
        selectTimesheet?.map((time, index) => {
          return (
            <TimeSheetItem
              areaName={time.areaName}
              clientName={time.clientName}
              projectName={time.projectName}
              categoryName={time.categoryName}
              projectDescription={time.projectDescription}
              monday={time.monday}
              tuesday={time.tuesday}
              wednesday={time.wednesday}
              thursday={time.thursday}
              friday={time.friday}
              saturday={time.saturday}
              sunday={time.sunday}
              total={time.total}
              key={index}
            />
          );
        })
      )}
    </div>
  );
};
