/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import axios from "axios";

const DeleteTimeEntry = ({ timeEntryId, onClose }) => {
  useEffect(() => {
    const fetchData = async () => {
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

        onClose();
      } catch (error) {
        console.error("Error en fetchData:", error);
      }
    };

    fetchData();
  }, [timeEntryId, onClose]);

  return <>{/* Puedes agregar contenido aquí según sea necesario */}</>;
};

export default DeleteTimeEntry;
