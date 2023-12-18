import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const EstadoSemana = () => {
    const [estadoSemana, setEstadoSemana] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la solicitud POST para obtener el token
        const tokenResponse = await axios.post(
          'https://testapp.sophossolutions.com/SophosApiChronus/api/Token',
          {
            user: "UserSophosChronus.Api",
            password: "Sophos.2020*#",
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Obtener el token del resultado
        const authToken = tokenResponse.data.token;

        const response = await axios.get(
          'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetWeekState',
          {
            params: {
              userName: 'kevin.jimenez',
              IdLenguaje: "1",
              DateFilter: "2023-12-11"
            },
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        // Obtener y establecer los datos del aprobador en el estado
        setEstadoSemana(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <p>{estadoSemana.status}</p>
    </div>
  );
}

export default EstadoSemana