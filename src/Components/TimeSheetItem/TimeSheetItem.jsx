/* eslint-disable react/prop-types */
import { IconCheck, IconEdit, IconX } from "@tabler/icons-react";
import "./TimeSheetItem.css";
import { useContext, useState } from "react";
import { useUpdateTimeEntry } from "../../hooks/useUpdateTimeEntry";
import toast from "react-hot-toast";
import DeleteTimeEntry from "../../hooks/DeleteTimeEntry";
import { TimeSheetContext } from "../context";

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
  const { setUpdtaTimeSheet } = useContext(TimeSheetContext);
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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    console.log("Botón de eliminación clickeado");
    setIsDeleteModalOpen(true);
    setUpdtaTimeSheet((state) => state++);
    toast.success("Se ha eliminado con exito");
  };

  const handleCloseModal = () => {
    console.log("Cerrando el modal de eliminación");
    setIsDeleteModalOpen(false);
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

      {isDeleteModalOpen && (
        <div className="delete-modal">
          {/* Pasa correctamente el timeEntryId al componente DeleteTimeEntry */}
          <DeleteTimeEntry
            timeEntryId={timeEntryId}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default TimeSheetItem;
