import { useNavigate } from "react-router-dom";
import "./NotAuthorized.css"
const NotAuthorized = () => {
    const navigate = useNavigate();
  return (
    <div className="not-authorized">
        <div>
        <h1>No tienes acceso</h1>
        <button onClick={()=>navigate("/")}>Inicia Sesión</button>

        </div>
        
    </div>
  )
}

export default NotAuthorized