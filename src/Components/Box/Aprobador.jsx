import { useEffect, useState } from "react";
import axios from "axios";

const Aprobador = () => {
  const [aprobadorData, setAprobadorData] = useState({});
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

        // Realizar la solicitud GET para obtener los datos del aprobador correspondiente a 'luis.ruizr'
        const response = await axios.get(
          'https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getApproverByUserName',
          {
            params: {
              userName: 'andres.uruburu',
            },
            headers: {
              Authorization: `Bearer ${authToken}`,
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

  return (
    <div>
      <p>{aprobadorData.userName}</p>
    </div>
  );
};

export default Aprobador;
