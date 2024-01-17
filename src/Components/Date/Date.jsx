
import './Date.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from '../Spinner/Spinner';
import useGetFirstWeek from '../../hooks/useGetFirstWeek';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';  


const Date = ({week, handleWeekChange}) => {
  const [listUser, setLisUser] = useState("");
  const [weekStartDate, setWeekStartDate] = useState(null);
  const tokken = window.localStorage.getItem("tokken");
  const userId = window.localStorage.getItem("userId");
  const urlG =
    "https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/getUsersByApprover";

  let params = {
    UserId: userId,
  };

  const getListUsers = async () => {
    try {
      let headersG = {
        Authorization: "Bearer " + tokken,
      };

      let responseListUser = await axios.get(urlG, {
        headers: headersG,
        params,
      });
      setLisUser(responseListUser.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date) => {
    // Usa la función setWeekStartDate para actualizar el estado
    setWeekStartDate(date);
  };

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <div className='date'>
      <label htmlFor=""><strong> Timesheet para usuario: </strong></label>
     
      {listUser ? (
        <select name="select" className='user'>
          {listUser.map((user, index) => (
            <option key={index} value={user.userName}>
              {user.userName}
            </option>
          ))}
        </select>
      ) : (
        <Spinner />
      )}

      <label htmlFor=""><strong>Semana de inicio lunes: </strong></label>
      <DatePicker
        className="user"
        selected={weekStartDate}
        onChange={(date) => {setWeekStartDate(date), handleDateChange}}
        value={week}
      />
      <button className="week button" onClick={() => handleWeekChange(-7)}>
        Semana Anterior
      </button>
      <button className="week button" onClick={() => handleWeekChange(7)}>
        Semana Proxima
      </button>
      <button className='button'>
        Filtrar
      </button>
      <div className='line-week'></div>
    </div>
  );
};

export default Date;
