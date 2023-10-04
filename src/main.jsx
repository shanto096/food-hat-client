import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Router';
import AuthContextProvider from './Pages/Provider/AuthContextProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <AuthContextProvider>
     <div className='md:max-w-7xl mx-auto'>
          <RouterProvider router={router} />  
      </div>
     </AuthContextProvider>
   
  </React.StrictMode>,
)
