/* eslint-disable react/prop-types */
import { TimeSheet } from '../TimeSheet/TimeSheet'
import './Line.css'


const Line = ({timeSheet,loading}) => {
  return (
    <div className='block-line'>
        <div className='lineThree'>
        <TimeSheet timeSheet={timeSheet} loading={loading}/>
        </div>
    </div>
    
  )
}

export default Line