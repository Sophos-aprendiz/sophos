import './Desc.css'

const Desc = () => {
  return (
    <div className='container'>
        <div className='container-client'>
            <div>Nombre Area</div>
            <div>|</div>
            <div>Nombre Cliente</div>
            <div>|</div>
            <div>Codigo Proyecto</div>
            <div>|</div>
            <div>Nombre Categoria</div>
            <div>|</div>
        </div>
        <div className='container-desc'>
            
            <div>Descripcion</div> 
            
        </div>
        <div className='container-days'>
          <div>|</div>
            <div>Lunes</div>
            <div>|</div>
            <div>Martes</div>
            <div>|</div>
            <div>Miercoles</div>
            <div>|</div>
            <div>Jueves</div>
            <div>|</div>
            <div>Viernes</div>
            <div>|</div>
            <div>Sabado</div>
            <div>|</div>
            <div>Domingo</div>
            <div>|</div>
            <div>Total</div>
        </div>
    </div>
  )
}

export default Desc