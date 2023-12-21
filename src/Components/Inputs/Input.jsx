/* eslint-disable react/prop-types */
import './Input.css'


const Input = ({handleOnChange}) => {
  const options = [
    {
      name:'Horas cargables al cliente',
      value:"GetTimeEntries"
    }
    ,
    {
      name:'Horas no cargables al cliente',
      value:"GetTimeEntriesNC"
    }
    ,
    {
      name:'Horas por requerimiento cargables al cliente',
      value:"GetTimeEntriesReqC"
    }
    ,
    {
      name:'Horas por requerimiento no cargables al cliente',
      value:"GetTimeEntriesReqNC"
    }
    ,
    {
      name:'General Sophos Cargable',
      value:'GetTimeEntriesGsC'
    }
    ,
    {
      name:'General Sophos No Cargable',
      value:'GetTimeEntriesGsNC'
    }
    
  ];

  return (
    <div className="contenedor">
      <div className="desplegable">
      <select onChange={handleOnChange} className='select-hours'>
        {
          options.map((options,index)=>{
            return(
              <option value={options.value} key={index}>
                {options.name}
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