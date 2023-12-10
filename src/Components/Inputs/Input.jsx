import './Input.css'
import React, { useState } from 'react';

const Input = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const opciones = [
    'Horas cargables al cliente',
    'Horas no cargables al cliente',
    'Horas por requerimiento cargables al cliente',
    'Horas por requerimiento cargables al cliente',
    'General Sophos cargable',
    'General Sophos NO cargable',
  ];

  const handleToggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
    setMostrarMenu(false);
  };

  return (
    <div className="contenedor">
      <div className="desplegable">
        <button className="boton-principal" onClick={handleToggleMenu}>
          {opcionSeleccionada ? opcionSeleccionada : 'Selecciona una opción'}
        </button>
        {mostrarMenu && (
          <div className="contenido-desplegable">
            {opciones.map((opcion, index) => (
              <button
                key={index}
                className="boton-opcion"
                onClick={() => handleOpcionSeleccionada(opcion)}
              >
                {opcion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;