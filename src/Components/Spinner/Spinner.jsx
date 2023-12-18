import "./Spinnner.css"
import { BounceLoader } from "react-spinners"


const Spinner = () => {
  return (
    <div className="container-spinner">
        <BounceLoader color="#9b43fb" />
    </div>
  )
}

export default Spinner