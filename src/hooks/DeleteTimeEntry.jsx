import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useInsertTimeEntry from './InsertTimeEntry'; // Importa el hook

const DeleteTimeEntry = ({ timeEntryId, onClose }) => {
  const { userName, loading: insertLoading } = useInsertTimeEntry(); // Utiliza el hook para obtener el userName

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!timeEntryId || !userName) {
          console.error("timeEntryId o userName no disponibles. La eliminación no se realizará.");
          return;
        }

        // Puedes manejar la obtención del token de manera similar a InsertTimeEntry si es necesario

        const authToken = window.localStorage.getItem("tokken");
        const url = `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/DeleteTimeEntry?IdTimeEntry=${timeEntryId}&WHODIDIT=${userName}`;

        const headers = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        };

        const response = await axios.delete(url, { 'headers': headers });
        console.log("TimeEntry eliminado:", response.data);
        // Puedes hacer algo con la respuesta si es necesario

        // Cierra el modal o realiza otras acciones después de eliminar
        onClose();
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!insertLoading) {
      fetchData();
    }
  }, [timeEntryId, userName, insertLoading, onClose]);

  return (
    <>
      
    </>
  );
};

export default DeleteTimeEntry;