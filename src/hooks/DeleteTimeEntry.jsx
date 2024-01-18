/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext } from "react";
import { TimeSheetContext } from "../Components/context";

const DeleteTimeEntry = () => {
  const { setUpdtaTimeSheet } = useContext(TimeSheetContext);
  const fetchData = async (timeEntryId) => {
    try {
      if (!timeEntryId) {
        console.error(
          "timeEntryId no disponible. La eliminación no se realizará."
        );
        return;
      }

      console.log("Realizando la solicitud de eliminación...");

      const authToken = window.localStorage.getItem("tokken");
      const userName = window.localStorage.getItem("user");
      const url = `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/DeleteTimeEntry?IdTimeEntry=${timeEntryId}&WHODIDIT=${userName}`;

      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      };

      await axios.delete(url, { headers: headers });
      setUpdtaTimeSheet((state) => ++state);
    } catch (error) {
      console.error("Error en fetchData:", error);
    }
  };

  return fetchData;
};

export default DeleteTimeEntry;
