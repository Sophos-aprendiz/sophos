import './Box.css'
import React from 'react'

const Box = () => {
  return (
    <div className='set'>
        <div className='box'>
            <strong><p>Usuario</p></strong>
            <div className='api'>API</div>
        </div>
        <div className='box'>
            <strong><p>Semana</p></strong>
            <div className='api'>API</div>
        </div>
        <div className='box'>
            <strong><p>Estado</p></strong>
            <div className='api'>API</div>
        </div>
        <div className='box'>
            <strong><p>Aprobador</p></strong>
            <div className='api'>API</div>
        </div>
        <div className='box'>
            <strong><p>País</p></strong>
            <div className='api'>API</div>
        </div>
        <div className='line-box'></div>
        
    </div>
  )
}

export default Box