import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const EstadoSemana = () => {
    const [estadoSemana, setEstadoSemana] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Obtener el token del resultado
        const authToken =window.localStorage.getItem("tokken")
        const userName=window.localStorage.getItem("user")
        const response = await axios.get(
          'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetWeekState',
          {
            params: {
              userName: userName,
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div>
    {
      estadoSemana?<p>{estadoSemana.status}</p>:<Spinner/>
    }
      
    </div>
  );
}

export default EstadoSemana