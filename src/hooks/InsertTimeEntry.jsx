// useInsertTimeEntry.jsx
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useGetFirstWeek from "./useGetFirstWeek";
import { formatDate } from "../utils/formatDate";
import { TimeSheetContext } from "../Components/context";

const useInsertTimeEntry = () => {
  const [insert, setInsert] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [week] = useGetFirstWeek();
  const authToken = window.localStorage.getItem("tokken");
  const { setUpdtaTimeSheet } = useContext(TimeSheetContext);

  useEffect(() => {
    const storedUserName = window.localStorage.getItem("user");
    setUserName(storedUserName);
  }, []);

  const postInsert = async (dias, description, idCategory = "") => {
    try {
      setLoading(true);

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
      setLoading(false); // Establecer loading a false después de la solicitud (incluso si hay un error)
    }
  };

  return { insert, userName, loading, postInsert };
};

export default useInsertTimeEntry;
