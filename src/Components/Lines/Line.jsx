/* eslint-disable react/prop-types */
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