import {createBrowserRouter} from 'react-router-dom';
import App from "../App"
import Panel from '../views/Panel/Panel';



export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,

    },
      {
        path: '/panel',
        element: <Panel/>,
      },
      {
        path:"*",
        element:<h1>404 Not Found</h1>
      }
])