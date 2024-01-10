// InsertTimeEntry.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const useInsertTimeEntry = () => {
  const [token, setToken] = useState('');
  const [insert, setInsert] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const url = 'https://testapp.sophossolutions.com/SophosApiChronus/api/Token';
        const credentials = {
          user: 'UserSophosChronus.Api',
          password: 'Sophos.2020*#',
        };
        const { data } = await axios.post(url, credentials);
        setToken(data.token);
      } catch (error) {
        console.error('Error al obtener el token:', error);
        setLoading(false);
      }
    };

    getToken();
  }, []); // Llamada solo al montar el componente

  const postInsert = async (dias) => {
    try {
      if (!token) {
        console.error('Token no disponible. La inserción no se realizará.');
        return;
      }

      const urlInsert =
        'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/InsertTimeEntry';
      const headers = {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const body = {
          categoryId: 805159,
          timeEntryCreatorUserName: 'luis.ruizr',
          timeEntryDescription: 'prueba postman',
          timeEntryEstimateDuration: 0,
          timeEntryEnteredDate: '2023-12-18',
          timeEntryUserName: 'luis.ruizr',
          timeEntryMonday: 0,
          timeEntryTuesday: 0,
          timeEntryWednesday: 0,
          timeEntryThursday: 9,
          timeEntryFriday: 9,
          timeEntrySaturday: 0,
          timeEntrySunday: 0,
          isCompensatory: true,
          timeEntryId: 0,
          mensaje: 'string',
          whodidit: 'luis.ruizr',
        };

      const response = await axios.post(urlInsert, body, { headers });
      setInsert(response.data);
    } catch (error) {
      console.error('Error al insertar:', error);
    } finally {
      setLoading(false);
    }
  };

  return { insert, loading, postInsert };
};

export default useInsertTimeEntry;
