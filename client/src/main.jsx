import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import RootLayout from './components/layout/RootLayout.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<RootLayout/>,
  children:[{
    path:"/",
    element:<App/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router}/>

  </StrictMode>,
)
