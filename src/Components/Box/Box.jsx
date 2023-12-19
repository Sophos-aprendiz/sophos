/* eslint-disable react-hooks/exhaustive-deps */
import './Box.css'
import { useEffect, useState } from "react";
import axios from "axios";
import UserName from './UserName';
import Aprobador from './Aprobador';
import EstadoSemana from './EstadoSemana';
import Spinner from '../Spinner/Spinner';


const Box = () => {
    // Definir el estado para el token, la semana y el estado de carga
  const [week, setWeek] = useState("");
  const [loading, setLoading] = useState(true);


  
  // Esta función asincrónica obtiene el token y la primera semana del usuario
  const getFirstWeek = async () => {
    const tokken=window.localStorage.getItem("tokken")
    const userName=window.localStorage.getItem("user")
    // Definir las constantes para la solicitud de la primera semana ------------
      const urlG =
        "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/getFirstWeekByUserName";
    
      let params = {
        // Nombre del usuario 
        UserName:userName,
        WeekDate: "0",
        WeekRate: "0",
      };
    try {

      // Definir los encabezados para la solicitud de la primera semana
      let headersG = {
        Authorization: "Bearer " + tokken,
      };

      // Solicitar la primera semana con axios y guardarla en el estado
      let responseGetWeek = await axios.get(urlG, {
        headers: headersG,
        params,
      });
      setWeek(responseGetWeek.data.data);
      console.log(week);

      // Cambiar el estado de carga a falso
      setLoading(false);
    } catch (error) {
      // Mostrar el error en la consola
      console.log(error);
    }
  };

  // Usar el efecto para llamar a la función getFirstWeek cuando se monta el componente
  useEffect(() => {
    getFirstWeek();
  }, []);



  // Mostrar el estado de la semana en la consola
  console.log(week)

  
  return (
    <div className='set'>
        <div className='box'>
            <strong><p>Usuario</p></strong>
            <div className='api'><UserName/></div>
        </div>
        <div className='box'>
            <strong><p>Semana</p></strong>
            <div className='api'> {loading && <Spinner/>}
            {week && <p> {week[0].fecha}</p>}</div>
        </div>
        <div className='box'>
            <strong><p>Estado</p></strong>
            <div className='api'><EstadoSemana/></div>
        </div>
        <div className='box'>
            <strong><p>Aprobador</p></strong>
            <div className='api'><Aprobador/></div>
        </div>
        <div className='box'>
            <strong><p>Pais</p></strong>
            <div className='api'>Colombia</div>
        </div>
        <div className='line-box'></div>
        
    </div>
  )
}

export default Box