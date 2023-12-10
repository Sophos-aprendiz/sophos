import './Input.css'


const Input = () => {
  // const [mostrarMenu, setMostrarMenu] = useState(false);
  // const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const opciones = [
    {
      name:'Horas cargables al cliente',
      value:"GetTimeEntries"
    }
    ,
    {
      name:'Horas cargables al cliente',
      value:"GetTimeEntries"
    }
    ,
    {
      name:'Horas cargables al cliente',
      value:"GetTimeEntries"
    }
    
    // 'Horas no cargables al cliente',
    // 'Horas por requerimiento cargables al cliente',
    // 'Horas por requerimiento cargables al cliente',
    // 'General Sophos cargable',
    // 'General Sophos NO cargable',
  ];

  // const handleToggleMenu = () => {
  //   setMostrarMenu(!mostrarMenu);
  // };

  // const handleOpcionSeleccionada = (opcion) => {
  //   setOpcionSeleccionada(opcion);
  //   setMostrarMenu(false);
  // };

  return (
    <div className="contenedor">
      <div className="desplegable">
      <select>
        {
          opciones.map((opciones,index)=>{
            return(
              <option value={opciones.value} key={index}>
                {opciones.name}
              </option>
            )
          })
        }
      </select>


          </div>


    </div>
  );
};

export default Input;