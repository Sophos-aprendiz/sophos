// DeleteTimeEntry.jsx
import React, { useEffect } from 'react';
import axios from 'axios';
import useInsertTimeEntry from './InsertTimeEntry'; // Importa el hook

const DeleteTimeEntry = () => {
  const { idTable, userName } = useInsertTimeEntry(); // Utiliza el hook para obtener el idTable y el userName

  useEffect(() => {
    const deleteEntry = async () => {
      try {
        if (!idTable || !userName) {
          console.error("idTable o userName no disponibles. La eliminación no se realizará.");
          return;
        }

        const authToken = window.localStorage.getItem("tokken");
        const url = `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/DeleteTimeEntry?IdTimeEntry=${idTable}&WHODIDIT=${userName}`;

        const headers = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        };

        const response = await axios.delete(url, { 'headers': headers });
        console.log("TimeEntry eliminado:", response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    deleteEntry();
  }, [idTable, userName]);

  return (
    <>
      
    </>
  );
};

export default DeleteTimeEntry;