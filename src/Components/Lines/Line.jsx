
import { TimeSheet } from '../TimeSheet/TimeSheet'
import './Line.css'


const Line = ({children}) => {
  return (
    <div className='block-line'>
        <div className='lineThree'>
        <TimeSheet timeSheet={timeSheet} loading={loading}/>
        {children}
        </div>
    </div>
    
  )
}

export default Line