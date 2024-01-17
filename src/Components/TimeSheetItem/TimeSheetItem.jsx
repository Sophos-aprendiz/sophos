/* eslint-disable react/prop-types */
import { IconCheck, IconEdit, IconX } from "@tabler/icons-react";
import "./TimeSheetItem.css";
import { useState } from "react";
const TimeSheetItem = ({
  areaName,
  clientName,
  projectName,
  categoryName,
  projectDescription,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  total,
  timeEntryId,
}) => {
  const [edit, setEdit] = useState(false);
  const initialState = {
    lunes: monday,
    martes: tuesday,
    miercoles: wednesday,
    jueves: thursday,
    viernes: friday,
    sabado: saturday,
    domingo: sunday,
  };
  // Estado para los días
  const [dias, setDias] = useState(initialState);
  const handleEdit = () => setEdit(!edit);
  // Función para manejar cambios en el input
  const handleChange = (dia, value) => {
    // Verificar que el valor sea un número válido
    const newValue = value == "" ? "" : parseFloat(value);
    if (
      value === "" ||
      (!isNaN(newValue) &&
        newValue >= 0 &&
        newValue <= 24 &&
        newValue % 0.5 === 0)
    ) {
      // Actualizar el estado solo si el valor es válido
      setDias((prevState) => ({
        ...prevState,
        [dia]: newValue,
      }));
    }
  };

  // Función para calcular el total
  const calcularTotal = () => {
    const total = Object.values(dias).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  return (
    <div className="timeSheetItem">
      <div>{areaName}</div>
      <div>{clientName}</div>
      <div>{projectName}</div>
      <div>{categoryName}</div>
      <div>{projectDescription}</div>
      {edit ? (
        <>
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.lunes}
            onChange={(e) => handleChange("lunes", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.martes}
            onChange={(e) => handleChange("martes", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.miercoles}
            onChange={(e) => handleChange("miercoles", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.jueves}
            onChange={(e) => handleChange("jueves", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.viernes}
            onChange={(e) => handleChange("viernes", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.sabado}
            onChange={(e) => handleChange("sabado", e.target.value)}
          />
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.domingo}
            onChange={(e) => handleChange("domingo", e.target.value)}
          />

          <input
            className="input-hour total"
            type="number"
            value={calcularTotal()}
            readOnly
          />
        </>
      ) : (
        <>
          <div className="day">{monday}</div>
          <div className="day">{tuesday}</div>
          <div className="day">{wednesday}</div>
          <div className="day">{thursday}</div>
          <div className="day">{friday}</div>
          <div className="day">{saturday}</div>
          <div className="day">{sunday}</div>
          <div className="day">{total}</div>
        </>
      )}

      {edit ? (
        <IconCheck
          className="icons"
          onClick={handleEdit}
          size={16}
          color="green"
        />
      ) : (
        <IconEdit
          className="icons"
          onClick={handleEdit}
          size={16}
          color="purple"
        />
      )}

      <IconX
        className="icons"
        onClick={() => console.log(timeEntryId)}
        size={16}
        color="purple"
      />
    </div>
  );
};

export default TimeSheetItem;
