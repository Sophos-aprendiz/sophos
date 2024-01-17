/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './Box.css';

import UserName from './UserName';
import Aprobador from './Aprobador';
import EstadoSemana from './EstadoSemana';
import Spinner from '../Spinner/Spinner';
import Date from "../Date/Date";
import useGetFirstWeek from '../../hooks/useGetFirstWeek';

const Box = ({ week,loading}) => {

  const [weekSemana]=useGetFirstWeek()


  return (
    <div className='set'>
      <div className='box'>
        <strong>
          <p>Usuario</p>
        </strong>
        <div className='api'>
          <UserName />
        </div>
      </div>
      <div className='box'>
        <strong>
          <p>Semana</p>
        </strong>
        <div className='api'>
          {loading && <Spinner />}
          {week && <p>{week}</p>}
        </div>
      </div>
      <div className='box'>
        <strong>
          <p>Estado</p>
        </strong>
        <div className='api'>
          <EstadoSemana weekSemana = {weekSemana}  />
        </div>
      </div>
      <div className='box'>
        <strong>
          <p>Aprobador</p>
        </strong>
        <div className='api'>
          <Aprobador />
        </div>
      </div>
      <div className='box'>
        <strong>
          <p>Pais</p>
        </strong>
        <div className='api'>Colombia</div>
      </div>
      <div className='line-box'></div>
    </div>
  );
};

export default Box;
