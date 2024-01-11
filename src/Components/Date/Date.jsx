/* eslint-disable react-hooks/exhaustive-deps */
import './Date.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from '../Spinner/Spinner';

const Date = () => {
  // Definir el estado para el token, la semana y el estado de carga
  const [listUser, setLisUser] = useState("")
 

  const tokken=window.localStorage.getItem("tokken")
  const userId=window.localStorage.getItem("userId")

  // Mostrar el estado de la semana en la consola

  // Definir las constantes para la solicitud de la lista de usuarios ------------
  const urlG =
    "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getUsersByApprover";

  let params = {
    // Nombre del usuario 
    UserId: userId,
  };

  // Esta función asincrónica obtiene el token y la primera semana del usuario
  const getListUsers = async () => {
    try {

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

      // Cambiar el estado de carga a falso
      
    } catch (error) {
      // Mostrar el error en la consola
      console.log(error);
    }
  };

  // Usar el efecto para llamar a la función getFirstWeek cuando se monta el componente
  useEffect(() => {
    getListUsers();
  }, []);





  return (
    <div className='date'>
      <label htmlFor=""><strong> Timesheet para usuario: </strong></label>
     
      {
        listUser?<select name="select" className='user'>{listUser.map((user,index)=>{
          return(<option key={index} value={user.userName}>{user.userName}</option>)
        }) }
      </select>:<Spinner/>
      }
 
      <label htmlFor=""><strong>Semana de inicio lunes: </strong></label>
      <input className='user' type="date" />
      <button className='week button'>Semana Anterior</button>
      <button className='week button'>Semana Proxima</button>
      <button className='button'>Filtrar</button>
      <div className='line-week'></div>
    </div>
  )
}

export default Date