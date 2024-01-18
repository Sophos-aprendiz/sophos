// TimeSheetItem.jsx
import React, { useState } from "react";
import { IconEdit, IconX } from "@tabler/icons-react";
import "./TimeSheetItem.css";
import DeleteTimeEntry from "../../hooks/DeleteTimeEntry";

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    console.log('Botón de eliminación clickeado');
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Cerrando el modal de eliminación');
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="timeSheetItem">
      <div>{areaName}</div>
      <div>{clientName}</div>
      <div>{projectName}</div>
      <div>{categoryName}</div>
      <div>{projectDescription}</div>
      <div className="day">{monday}</div>
      <div className="day">{tuesday}</div>
      <div className="day">{wednesday}</div>
      <div className="day">{thursday}</div>
      <div className="day">{friday}</div>
      <div className="day">{saturday}</div>
      <div className="day">{sunday}</div>
      <div className="day">{total}</div>
      <IconEdit size={16} color="purple" />

      {/* Utiliza un botón para el ícono de eliminación */}
      <button className="delete-button" onClick={handleDeleteClick}>
        <IconX size={16} color="purple" />
      </button>

      {isDeleteModalOpen && (
        <div className="delete-modal">
          {/* Pasa correctamente el timeEntryId al componente DeleteTimeEntry */}
          <DeleteTimeEntry timeEntryId={timeEntryId} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default TimeSheetItem;
