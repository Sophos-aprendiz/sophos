/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { formatDate } from "../../utils/formatDate";

const EstadoSemana = ({ week, loading }) => {
  const [estadoSemana, setEstadoSemana] = useState({});

  const fetchData = async () => {
    try {
      // Obtener el token del resultado
      const authToken = window.localStorage.getItem("tokken");
      const userName = window.localStorage.getItem("user");

      const response = await axios.get(
        "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetWeekState",
        {
          params: {
            userName: userName,
            IdLenguaje: "1",
            DateFilter: formatDate(week),
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

  useEffect(() => {
    if (week) fetchData();
  }, [loading, week]);

  return <div>{estadoSemana ? <p>{estadoSemana.status}</p> : <Spinner />}</div>;
};

export default EstadoSemana;
