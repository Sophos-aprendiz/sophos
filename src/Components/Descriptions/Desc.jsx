import './Desc.css'

const Desc = () => {
  return (
    <div className='container'>
        <div className='container-client'>
            <p>Nombre Cliente</p>
            <p>|</p>
            <p>Codigo Proyecto</p>
            <p>|</p>
            <p>Nombre Categoria</p>
            <p>|</p>
        </div>
        <div className='container-desc'>
            <p>Descripcion</p> 
        </div>
        <div className='container-days'>
            <p>|</p>
            <p>Lunes</p>
            <p>|</p>
            <p>Martes</p>
            <p>|</p>
            <p>Miercoles</p>
            <p>|</p>
            <p>Jueves</p>
            <p>|</p>
            <p>Viernes</p>
            <p>|</p>
            <p>Sabado</p>
            <p>|</p>
            <p>Domingo</p>
            <p>|</p>
            <p>Total</p>
        </div>
    </div>
  )
}

export default Desc