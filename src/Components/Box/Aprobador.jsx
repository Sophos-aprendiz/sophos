import { useEffect, useState } from "react";
import axios from "axios";

const Aprobador = () => {
  const [aprobadorData, setAprobadorData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokken = window.localStorage.getItem("tokken");
        const userName = window.localStorage.getItem("user");
        // Obtener el token del resultado

        // Realizar la solicitud GET para obtener los datos del aprobador correspondiente a 'luis.ruizr'
        const response = await axios.get(
          "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getApproverByUserName",
          {
            params: {
              userName: userName,
            },
            headers: {
              Authorization: `Bearer ${tokken}`,
            },
          }
        );

        // Obtener y establecer los datos del aprobador en el estado
        setAprobadorData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (aprobadorData.userName) {
    return (
      <div>
        <p>{aprobadorData.userName}</p>
      </div>
    );
  }
};

export default Aprobador;
