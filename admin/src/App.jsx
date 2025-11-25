
import { Fragment, useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Users from './pages/Users'
import Login from './pages/Login'

const App = () => {
  const[token,setToken]=useState(localStorage.getItem('token') ? localStorage.getItem('token'):"")
  console.log(token)
  return (
    <Fragment>
     <>
      {
        !token ? <Login setToken={setToken}/> :(
         <>
          <Navbar token={token} setToken={setToken}/>
      <div className='flex w-full '>
        <div className='w-[18%] fixed min-h-screen border-r-2 '>
          <SideBar/>
        </div>
        <div className='flex-1 px-5 py-5 ml-[18%]'>
          <Routes>
            <Route path='/' element={<HomePage token={token}/>}></Route>
            <Route path='/add' element={<Add token={token}/>}></Route>
            <Route path='/list' element={<List token={token}/>}></Route>
            <Route path='/orders' element={<Orders token={token}/>}></Route>
            <Route path='/users' element={<Users token={token}/>}></Route>

          </Routes>
        </div>
      </div>
         </>
        )
      }
     </>
    </Fragment>
  )
}

export default App