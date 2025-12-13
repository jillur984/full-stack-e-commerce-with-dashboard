import React, { Fragment } from 'react'
import Banner from './components/Banner'
import Container from './components/Container'
import NewArrival from './components/NewArrival'

const App = () => {
  return (
    <>
     <Banner/>
     <Container>
      <NewArrival/>
     </Container>
    </>
  )
}

export default App