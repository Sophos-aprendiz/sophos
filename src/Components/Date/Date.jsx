import React from 'react'
import './Date.css'

const Date = () => {
  return (
    <div className='date'>
      <label htmlFor=""><strong> Timesheet para usuario: </strong></label>
      <input className='user' placeholder='usuario API' type="text" />
      <label htmlFor=""><strong>Semana de inicio lunes: </strong></label>
      <input type="date" />
      <input className='mini-box' type="date" />
      <button className='week button'>Semana Anterior</button>
      <button className='week button'>Semana Proxima</button>
      <button className='button'>Filtrar</button>
      <div className='line-week'></div>
    </div>
  )
}

export default Date