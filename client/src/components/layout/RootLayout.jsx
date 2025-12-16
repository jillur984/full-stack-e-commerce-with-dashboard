import React, { Fragment } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServiceTag from '../ServiceTag'
import Footer from '../Footer'
import {Toaster} from "react-hot-toast"
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const RootLayout = () => {
  return (
    <Fragment>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
    </Provider>
    </Fragment>
  )
}

export default RootLayout