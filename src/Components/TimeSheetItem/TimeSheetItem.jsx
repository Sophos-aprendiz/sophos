/* eslint-disable react/prop-types */
import { IconCheck, IconEdit, IconX } from "@tabler/icons-react";
import "./TimeSheetItem.css";
import { useState } from "react";
import { useUpdateTimeEntry } from "../../hooks/useUpdateTimeEntry";
import toast from "react-hot-toast";
import DeleteTimeEntry from "../../hooks/DeleteTimeEntry";

const TimeSheetItem = ({
  areaName,
  clientName,
  categoryId,
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
  const { updateInsert } = useUpdateTimeEntry();
  const deleteData = DeleteTimeEntry();
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
  const handleEdit = () => setEdit(true);
  const handleCheck = async () => {
    try {
      await updateInsert(dias, projectDescription, categoryId, timeEntryId);
      setEdit(false);
      toast.success("Actualizado");
    } catch (error) {
      console.error(error);
    }
  };
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

  const handleDeleteClick = () => {
    deleteData(timeEntryId);
    toast.success("Se ha eliminado con exito");
  };

  return (
    <tr>
      <td>
        <p className="text-timesheet">{areaName}</p>
      </td>
      <td>
        <p className="text-timesheet">{clientName}</p>
      </td>
      <td>
        <p className="text-timesheet">{projectName}</p>
      </td>
      <td>
        <p className="text-timesheet">{categoryName}</p>
      </td>
      <td>
        <p className="text-timesheet">{projectDescription}</p>
      </td>
      {edit ? (
        <>
          <td>
            <input
              className="input-hour"
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={dias.lunes}
              onChange={(e) => handleChange("lunes", e.target.value)}
            />
          </td>
          <td>
            <input
              className="input-hour"
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={dias.martes}
              onChange={(e) => handleChange("martes", e.target.value)}
            />
          </td>
          <td>
            <input
              className="input-hour"
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={dias.miertdes}
              onChange={(e) => handleChange("miercoles", e.target.value)}
            />
          </td>
          <td>
            <input
              className="input-hour"
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={dias.jueves}
              onChange={(e) => handleChange("jueves", e.target.value)}
            />
          </td>
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.viernes}
            onChange={(e) => handleChange("viernes", e.target.value)}
          />
          <td>
            <input
              className="input-hour"
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={dias.sabado}
              onChange={(e) => handleChange("sabado", e.target.value)}
            />
          </td>
          <input
            className="input-hour"
            type="number"
            step="0.5"
            min="0"
            max="24"
            value={dias.domingo}
            onChange={(e) => handleChange("domingo", e.target.value)}
          />

          <td>
            <input
              className="input-hour total"
              type="number"
              value={calcularTotal()}
              readOnly
            />
          </td>
        </>
      ) : (
        <>
          <td>
            <p className="text-timesheet">{monday}</p>
          </td>
          <td>
            <p className="text-timesheet">{tuesday}</p>
          </td>
          <td>
            <p className="text-timesheet">{wednesday}</p>
          </td>
          <td>
            <p className="text-timesheet">{thursday}</p>
          </td>
          <td>
            <p className="text-timesheet">{friday}</p>
          </td>
          <td>
            <p className="text-timesheet">{saturday}</p>
          </td>
          <td>
            <p className="text-timesheet">{sunday}</p>
          </td>
          <td>
            <p className="text-timesheet">{total}</p>
          </td>
        </>
      )}
      <td>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          {edit ? (
            <IconCheck
              className="icons"
              onClick={handleCheck}
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
            onClick={handleDeleteClick}
            size={16}
            color="purple"
          />
        </div>
      </td>
    </tr>
  );
};

export default TimeSheetItem;
