// Importar las librerías necesarias
import './Info.css';
import { useState } from 'react';
import useInsertTimeEntry from '../../hooks/InsertTimeEntry.jsx'; // Ajusta la ruta del import si es necesario

// Componente Info
const Info = () => {
  // Estado para los días
  const [dias, setDias] = useState({
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: '',
    sabado: '',
    domingo: '',
  });

  // Función para manejar cambios en el input
  const handleChange = (dia, value) => {
    const newValue = value === '' ? '' : parseFloat(value);
    if (value === '' || (!isNaN(newValue) && newValue >= 0 && newValue <= 24 && newValue % 0.5 === 0)) {
      setDias((prevState) => ({
        ...prevState,
        [dia]: newValue,
      }));
    }
  };

  // Función para calcular el total
  const calcularTotal = () => {
    const total = Object.values(dias).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  // Obtiene el objeto { insert, loading } del hook
  const { postInsert, loading } = useInsertTimeEntry();

  // Función para manejar la inserción
  const handleInsert = async () => {
    try {
      await postInsert(dias);
      console.log('Inserción exitosa');
    } catch (error) {
      console.error('Error al insertar:', error);
    }
  };

  // Renderizado del componente
  return (
    <div className='container-info'>
      <div className='container-one'>
        <select className='select'></select>
        <select className='select'></select>
        <select className='select'></select>
      </div>
      <div className='container-two'>
        <input className='input-description' type='text' />
      </div>
      <div className='container-thre'>
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.lunes}
          onChange={(e) => handleChange('lunes', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.martes}
          onChange={(e) => handleChange('martes', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.miercoles}
          onChange={(e) => handleChange('miercoles', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.jueves}
          onChange={(e) => handleChange('jueves', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.viernes}
          onChange={(e) => handleChange('viernes', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.sabado}
          onChange={(e) => handleChange('sabado', e.target.value)}
        />
        <input
          className='input-hour'
          type='number'
          step='0.5'
          min='0'
          max='24'
          value={dias.domingo}
          onChange={(e) => handleChange('domingo', e.target.value)}
        />
        <input
          className='input-hour total'
          type='number'
          value={calcularTotal()}
          readOnly
        />
      </div>
      <button className='button-insert' onClick={handleInsert}>
        Insertar
      </button>
    </div>
  );
};

// Exportar el componente Info
export default Info;
