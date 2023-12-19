/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const UserName = () => {
    const [listUser, setLisUser] = useState("")
    const [loading, setLoading] = useState(true);
  
    
    const userId=window.localStorage.getItem("userId")
    // Mostrar el estado de la semana en la consola
    console.log(listUser)
  
    // Definir las constantes para la solicitud de la lista de usuarios ------------
    const urlG =
      "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getUsersByApprover";
  
    let params = {
      // Nombre del usuario 
      UserId:userId
    };
  
    // Esta función asincrónica obtiene el token y la primera semana del usuario
    const getListUsers = async () => {
   
      try {
        // Solicitar el token con axios y guardarlo en el estado y el almacenamiento local
        const tokken=window.localStorage.getItem("tokken")
    
  
        // Definir los encabezados para la solicitud de la primera semana
        let headersG = {
          Authorization: "Bearer " + tokken,
        };
  
        // Solicitar la primera semana con axios y guardarla en el estado
        let responseListUser = await axios.get(urlG, {
          headers: headersG,
          params,
        });
        setLisUser(responseListUser.data.data);
        console.log(listUser);
  
        // Cambiar el estado de carga a falso
        setLoading(false);
      } catch (error) {
        // Mostrar el error en la consola
        console.log(error);
      }
    };
  
    // Usar el efecto para llamar a la función getFirstWeek cuando se monta el componente
    useEffect(() => {
      getListUsers();
    }, []);
  
   
  
    // Mostrar el estado de la semana en la consola
    console.log(listUser)
  return (
    <div>
        {loading && <Spinner/>}
            {listUser && <p> {listUser[0].userName}</p>}
    </div>
  )
}

export default UserName