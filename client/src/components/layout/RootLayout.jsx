import React, { Fragment } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import ServiceTag from '../ServiceTag'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
        <ServiceTag/>
        <Footer/>
    </Fragment>
  )
}

export default RootLayout