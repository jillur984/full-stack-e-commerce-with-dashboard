import React, { Fragment } from 'react'
import Title from './components/Title'
import Banner from './components/Banner'
import Container from './components/Container'
import NewArrival from './components/NewArrival'

const App = () => {
  return (
    <Fragment>
     <Banner/>
     <Container>
      <NewArrival/>
     </Container>
    </Fragment>
  )
}

export default App