
import Container from './Container'
import {logo} from "../assets/images/index"
import { Link } from 'react-router-dom'

const Navbar = ({token,setToken}) => {

  const handleToken=()=>{
    setToken("")
  }

  return (
    <header className='border-b-2 border-gray-6000 w-full sticky top-0 left-0 bg-white z-50 '>
      <Container className="">
        <div className='flex justify-between items-center'>
          <div>
         <Link to={"/"}>
          <img src={logo} alt='logo' />
           <h1 className='py-1 font-black uppercase text-blue-600'>Admin Panel</h1>
         </Link>
        </div>
       
        <button onClick={handleToken} className='bg-black text-white rounded-full p-2 px-4 hover:bg-amber-500'>Logout</button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar