import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import RootLayout from './components/layout/RootLayout.jsx'
import SingleProduct from './pages/SingleProduct'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const router=createBrowserRouter([{
  path:"/",
  element:<RootLayout/>,
 children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
       
        {
          path: "/shop",
          element: <Shop />,
        },
         {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
         {
          path: "/signup",
          element: <Signup />,
        },
        
  

      ],
    },
  ],
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router}/>

  </StrictMode>,
)
