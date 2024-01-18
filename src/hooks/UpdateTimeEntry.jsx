import React, { useState } from 'react';
import axios from 'axios';

const UpdateTimeEntry = () => {
  const [loading, setLoading] = useState(true);
  const authToken = window.localStorage.getItem('tokken');

  const update = async () => {
    try {
      const headers = {
        'Authorization': `Bearer ${authToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json-patch+json',
      };

      const url = 'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/UpdateTimeEntry';
      const body = {
        // ... Tu cuerpo de actualización aquí
      };

      const response = await axios.put(`${url}`, body, { 'headers': headers });
      console.log('response: ', response.data.data);
    } catch (error) {
      console.error('Error en la actualización:', error);
    } finally {
      setLoading(false);
    }
  };

  // No ejecutamos automáticamente al cargar el componente, espera una llamada externa para actualizar
  return (
    <>
      {loading ? 'Cargando...' : null}
    </>
  );
};

export default UpdateTimeEntry;
