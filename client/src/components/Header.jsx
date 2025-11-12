import Container from './Container'
import {logo} from "../assets/images/index"
import SearchInput from './SearchInput'
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { headerNavigation } from '../constants/navigation';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

  return (
    <div className="border-b-[1px] border-slate-300">
        <Container className="">
            <div className='py-4 lg:py-6 flex items-center gap-x-3 md:gap-x-7 justify-between'>
              <div>
              <Link to={"/"}>
              <img src={logo} className='h-5 w-auto' /></Link>
            </div>
            <SearchInput/>
         {
        headerNavigation?.map((item)=>{
        
          return (
            <NavLink to={item.link} key={item?.title} className='cursor-pointer hover:bg-amber-400'>
            {item?.title}
          </NavLink>
          )
        })
         }
         <button className='relative group text-[20px]'><FaShoppingCart/>
         <span className='absolute  top-0 left-3 text-red-300'>0</span>
         </button>
         <button><FaUserAlt/></button>
            </div>
        </Container>
    </div>
  )
}

export default Header