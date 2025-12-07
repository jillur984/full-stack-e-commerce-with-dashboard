import React, { Fragment } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServiceTag from '../ServiceTag'
import Footer from '../Footer'
import {Toaster} from "react-hot-toast"

const RootLayout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
        <ServiceTag/>
        <Footer/>
        <Toaster position='bottom-right' toastOptions={{
      style:{
        background:"#000000",
        color:"#ffffff"
      }
    }}/>
    </Fragment>
  )
}

export default RootLayout