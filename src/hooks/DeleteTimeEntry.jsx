import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteTimeEntry = ({ timeEntryId, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!timeEntryId) {
          console.error("timeEntryId no disponible. La eliminación no se realizará.");
          return;
        }

        console.log('Realizando la solicitud de eliminación...');

        const authToken = window.localStorage.getItem("tokken");
        const userName = window.localStorage.getItem("user");
        const url = `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/DeleteTimeEntry?IdTimeEntry=${timeEntryId}&WHODIDIT=${userName}`;

        const headers = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        };

        const response = await axios.delete(url, { 'headers': headers });
        console.log("TimeEntry eliminado:", response.data);

        onClose();
      } catch (error) {
        console.error('Error en fetchData:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeEntryId, onClose]);

  return (
    <>
      {/* Puedes agregar contenido aquí según sea necesario */}
    </>
  );
};

export default DeleteTimeEntry;
