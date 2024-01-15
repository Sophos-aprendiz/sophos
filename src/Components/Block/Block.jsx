import './Block.css'
import Desc from "../Descriptions/Desc";
import Info from '../Info/Info';
import Total from '../Total/Total'
import Input from '../Inputs/Input';
import { TimeSheet } from '../TimeSheet/TimeSheet'
const handleOnChange = (event) => {
  const value = event.target.value;
  setSection(value);
  
};


const Block = () => {
  return (
    <div className='div-block'>
        <div className='block'>
          <div className='block-one'>
            <Input handleOnChange={handleOnChange} />
            <Desc/>
            <Info/>
          </div>
          <div className='block-two'>
            <TimeSheet/>
          </div>
        </div>
        <div className='blockTwo'>
       
          <div className='title'>
            <div className='concept'> Concepto </div>
            <div className='results'>
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
              <p>|</p>
            </div>
          </div>
          <Total/>
        </div>
    </div>
  )
}

export default Block