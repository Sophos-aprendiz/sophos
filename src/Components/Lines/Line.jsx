/* eslint-disable react/prop-types */
import './Line.css'


const Line = ({children}) => {
  return (
    <div className='block-line'>
        <div className='lineOne'></div>
        <div className='lineTwo'>
        </div>
        <div className='lineThree'>

        {children}
        </div>
    </div>
    
  )
}

export default Line