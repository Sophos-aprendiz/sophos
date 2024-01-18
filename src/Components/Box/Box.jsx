/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import "./Box.css";

import UserName from "./UserName";
import Aprobador from "./Aprobador";
import EstadoSemana from "./EstadoSemana";
import Spinner from "../Spinner/Spinner";
import Date from "../Date/Date";

const Box = ({ week, loading, handleWeekChange }) => {
  // Definir el estado para el token, la semana y el estado de carga

  return (
    <div className="set">
      <div className="box">
        <strong>
          <p>Usuario</p>
        </strong>
        <div className="api">
          <UserName />
        </div>
      </div>
      <div className="box">
        <strong>
          <p>Semana</p>
        </strong>
        <div className="api">
          {" "}
          {loading && <Spinner />}
          {week && <p> {week}</p>}
        </div>
      </div>
      <div className="box">
        <strong>
          <p>Estado</p>
        </strong>
        <div className="api">
          <EstadoSemana week={week} loading={loading} />
        </div>
      </div>
      <div className="box">
        <strong>
          <p>Aprobador</p>
        </strong>
        <div className="api">
          <Aprobador />
        </div>
      </div>
      <div className="box">
        <strong>
          <p>Pais</p>
        </strong>
        <div className="api">Colombia</div>
      </div>

      <Date
        handleWeekChange={(daysToAdd) => handleWeekChange(daysToAdd)}
        week={week}
      />
    </div>
  );
};

export default Box;
