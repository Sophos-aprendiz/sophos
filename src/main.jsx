import React from 'react'
import ReactDOM from 'react-dom/client'
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig.js';
import { MsalProvider } from '@azure/msal-react';
import { RouterProvider } from 'react-router-dom/dist/index.js';
import { router } from './router/index.jsx';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
    <RouterProvider router={router}/>
    </MsalProvider>
  </React.StrictMode>,
)
