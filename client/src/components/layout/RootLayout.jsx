import React, { Fragment } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServiceTag from '../ServiceTag'
import Footer from '../Footer'
import {Toaster} from "react-hot-toast"
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const RootLayout = () => {
  return (
    <Fragment>
    <Provider store={store}>
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
    </Provider>
    </Fragment>
  )
}

export default RootLayout