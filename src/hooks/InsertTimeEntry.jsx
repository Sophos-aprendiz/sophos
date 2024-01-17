// InsertTimeEntry.jsx
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useGetFirstWeek from "./useGetFirstWeek";
import { formatDate } from "../utils/formatDate";
import { TimeSheetContext } from "../Components/context";

const useInsertTimeEntry = () => {
  const [token, setToken] = useState("");
  const [insert, setInsert] = useState("");
  const [loading, setLoading] = useState(true);
  const [week] = useGetFirstWeek();
  const userName = window.localStorage.getItem("user");
  const { setUpdtaTimeSheet } = useContext(TimeSheetContext);

  const getToken = async () => {
    try {
      const url =
        "https://testapp.sophossolutions.com/SophosApiChronus/api/Token";
      const credentials = {
        user: "UserSophosChronus.Api",
        password: "Sophos.2020*#",
      };
      const { data } = await axios.post(url, credentials);
      setToken(data.token);
    } catch (error) {
      console.error("Error al obtener el token:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getToken();
  }, []); // Llamada solo al montar el componente

  const postInsert = async (dias, description, idCategory) => {
    try {
      if (!token) {
        console.error("Token no disponible. La inserción no se realizará.");
        return;
      }

      const urlInsert =
        "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/InsertTimeEntry";
      const headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      };

      const body = {
        categoryId: idCategory,
        timeEntryCreatorUserName: userName,
        timeEntryDescription: description,
        timeEntryEstimateDuration: 0,
        timeEntryEnteredDate: formatDate(week),
        timeEntryUserName: userName,
        timeEntryMonday: dias.lunes,
        timeEntryTuesday: dias.martes,
        timeEntryWednesday: dias.miercoles,
        timeEntryThursday: dias.jueves,
        timeEntryFriday: dias.viernes,
        timeEntrySaturday: dias.sabado,
        timeEntrySunday: dias.domingo,
        isCompensatory: true,
        timeEntryId: 0,
        mensaje: "string",
        whodidit: userName,
      };

      const response = await axios.post(urlInsert, body, { headers });
      setInsert(response.data);
      setUpdtaTimeSheet((state) => ++state);
    } catch (error) {
      console.error("Error al insertar:", error);
    } finally {
      setLoading(false);
    }
  };

  return { insert, loading, postInsert };
};

export default useInsertTimeEntry;
