// InsertTimeEntry.jsx
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useGetFirstWeek from "./useGetFirstWeek";
import { formatDate } from "../utils/formatDate";
import { TimeSheetContext } from "../Components/context";

const useInsertTimeEntry = () => {
  const [idTable, setIdTable] = useState(null);
  const [userName, setUserName] = useState(null); // Nuevo estado para almacenar userName
  const [loading, setLoading] = useState(true);
  const [week] = useGetFirstWeek();
  const authToken = window.localStorage.getItem("tokken");

  const postInsert = async (dias, description) => {
    try {
      if (!authToken) {
        console.error("Token no disponible. La inserción no se realizará.");
        return;
      }
      const urlInsert =
        "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/InsertTimeEntry";
      const headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      };
      const body = {
        categoryId: 805159,
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
      console.log("Respuesta de la inserción:", response.data);
      setIdTable(response.data.data.idTable);
      setUserName(userName); // Almacena el userName en el estado
    } catch (error) {
      console.error("Error al insertar:", error);
    } finally {
      setLoading(false);
    }
  };

  return { idTable, userName, loading, postInsert };
};

export default useInsertTimeEntry;