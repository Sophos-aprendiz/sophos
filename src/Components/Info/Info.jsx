import './Info.css'
import {useState} from 'react'
import ProjectSelector from './ProjectSelector';
const Info = () => {
  const [dias, setDias] = useState({
    lunes: '',
    martes: '',
    miercoles: '',
    jueves:'',
    viernes: '',
    sabado: '',
    domingo: '',
  });

  const handleChange = (dia, value) => {
    // Verificar que el valor sea un número válido
    const newValue = value == '' ? '' : parseFloat(value);
    if (value === '' || (!isNaN(newValue) && newValue >= 0 && newValue <= 24 && newValue % 0.5 === 0)) {
      // Actualizar el estado solo si el valor es válido
      setDias(prevState => ({
        ...prevState,
        [dia]: newValue,
      }));
    }
  };

  const calcularTotal = () => {
    // Calcular la suma de los valores de los días
    const total = Object.values(dias).reduce((acc, curr) => acc + curr, 0);
    return total;
  };
  return (
    <div className='container-info'>
      <div className='container-one'>
        <select className='select'></select>
        <select className='select'>
        </select>
        <ProjectSelector />
        <select className='select'>
          
        </select>
        <select className='select'></select>
        </div>
      <div className='container-two'>
         <input className='input-description' type="text"/>
      </div>
      <div className='container-thre'>
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.lunes}
          onChange={(e) => handleChange('lunes', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.martes}
          onChange={(e) => handleChange('martes', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.miercoles}
          onChange={(e) => handleChange('miercoles', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.jueves}
          onChange={(e) => handleChange('jueves', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.viernes}
          onChange={(e) => handleChange('viernes', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.sabado}
          onChange={(e) => handleChange('sabado', e.target.value)}
        />
        <input
          className='input-hour'
          type="number"
          step="0.5"
          min="0"
          max="24"
          value={dias.domingo}
          onChange={(e) => handleChange('domingo', e.target.value)}
        />
        
         <input
          className='input-hour total'
          type="number"
          value={calcularTotal()}
          readOnly
        /> 
      </div>
      <button className='button-insert'>Insertar</button>

    </div>
  )
}

export default Info