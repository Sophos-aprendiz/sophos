import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const UserName = () => {
    const [tokken, setTokken] = useState("");
    const [listUser, setLisUser] = useState("")
    const [loading, setLoading] = useState(true);
  
    // Definir las constantes para la solicitud de token
    const url = "https://testapp.sophossolutions.com/SophosApiChronus/api/Token";
    const credentials = {
      user: "UserSophosChronus.Api",
      password: "Sophos.2020*#",
    };
    const headers = {
      "Content-Type": "application/json",
    };
  
    // Mostrar el estado de la semana en la consola
    console.log(listUser)
  
    // Definir las constantes para la solicitud de la lista de usuarios ------------
    const urlG =
      "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getUsersByApprover";
  
    let params = {
      // Nombre del usuario 
      UserId: "9bd5a620-e312-461a-84c9-acce33550f0b",
    };
  
    // Esta función asincrónica obtiene el token y la primera semana del usuario
    const getListUsers = async () => {
   
      try {
        // Solicitar el token con axios y guardarlo en el estado y el almacenamiento local
        let { data } = await axios.post(url, credentials, headers);
        setTokken(data.token);
        window.localStorage.setItem("tokken", data.token)
        console.log(tokken);
  
        // Definir los encabezados para la solicitud de la primera semana
        let headersG = {
          Authorization: "Bearer " + data.token,
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
        {loading && <h1>Loading...</h1>}
            {listUser.length > 0 && <p> {listUser[0].userName}</p>}
    </div>
  )
}

export default UserName