/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import TimeSheetItem from "../TimeSheetItem/TimeSheetItem";
import { TimeSheetContext } from "../context";
import "./TimeSheet.css";
import Spinner from "../Spinner/Spinner";
import { Table } from "react-bootstrap";

export const TimeSheet = () => {
  const { selectTimesheet, loading } = useContext(TimeSheetContext);
  return (
    <div className="timesheet-container">
      {loading ? (
        <Spinner />
      ) : (
        <Table className="table" bordered size="lg">
          <thead>
            <tr>
              <th>Nombre Area</th>
              <th>Nombre Cliente</th>
              <th>Codigo Proyecto</th>
              <th>Nombre Categoria</th>
              <th>Descripción</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
              <th>D</th>
              <th>T</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectTimesheet?.map((time, index) => {
              return (
                <TimeSheetItem
                  categoryId={time.categoryId}
                  timeEntryId={time.timeEntryId}
                  areaName={time.areaName}
                  clientName={time.clientName}
                  projectName={time.projectName}
                  categoryName={time.categoryName.substring(0, 20)}
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
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};
