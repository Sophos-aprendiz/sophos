/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useGetFirstWeek = () => {
  // Definir el estado para el token, la semana y el estado de carga
  const [week, setWeek] = useState("");
  const [loading, setLoading] = useState(true);

  const tokken = window.localStorage.getItem("tokken");

  const userName = window.localStorage.getItem("user");

  // Esta función asincrónica obtiene el token y la primera semana del usuario
  const getFirstWeek = async () => {
    // Definir las constantes para la solicitud de la primera semana ------------
    const urlG =
      "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/getFirstWeekByUserName";

    let params = {
      // Nombre del usuario
      UserName: userName,
      WeekDate: "0",
      WeekRate: "0",
    };
    try {
      // Definir los encabezados para la solicitud de la primera semana
      let headersG = {
        Authorization: "Bearer " + tokken,
      };

      // Solicitar la primera semana con axios y guardarla en el estado
      let responseGetWeek = await axios.get(urlG, {
        headers: headersG,
        params,
      });
      let originalDate = responseGetWeek.data.data[0].fecha;

      let dateObject = new Date(originalDate);

      dateObject.setDate(dateObject.getDate() - 0);

      let formattedDate = formatDate(dateObject);

      setWeek(formattedDate);

      // Cambiar el estado de carga a falso
      setLoading(false);
    } catch (error) {
      // Mostrar el error en la consola
      console.log(error);
    }
  };

  const updateWeek = (daysToAdd) => {
    if (week) {
      let newDate = new Date(week);
      newDate.setDate(newDate.getDate() + daysToAdd);
      let formattedDate = formatDate(newDate);
      setWeek(formattedDate);
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  useEffect(() => {
    getFirstWeek();
  }, []);
  return [week, loading, updateWeek];
};

export default useGetFirstWeek;
