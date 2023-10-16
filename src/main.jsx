import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Router';
import AuthContextProvider from './Pages/Provider/AuthContextProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <AuthContextProvider>
     <QueryClientProvider client={queryClient}>
     <div className='md:max-w-7xl mx-auto'>
          <RouterProvider router={router} />  
      </div>
    </QueryClientProvider>
     
     </AuthContextProvider>
   
  </React.StrictMode>,
)
