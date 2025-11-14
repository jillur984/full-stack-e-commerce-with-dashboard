import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { BsBorderStyle } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";


const SideBar = () => {



  return (
    <div className='p-3 w-full h-full flex flex-col gap-3'>
      <NavLink to={"/add"} className="bg-slate-100 p-2 hover:bg-black hover:text-white flex items-center gap-2">
      <span>
        <IoMdAdd />
      </span>
       <p>Add Items</p>
    </NavLink>
    <NavLink to={"/list"} className="bg-slate-100 p-2 hover:bg-black hover:text-white flex items-center gap-2">
      <span>
        <CiBoxList />
      </span>
       <p>Product List</p>
    </NavLink>
    <NavLink to={"/orders"} className="bg-slate-100 p-2 hover:bg-black hover:text-white flex items-center gap-2">
      <span>
        <BsBorderStyle />
      </span>
       <p>Orders</p>
    </NavLink>
    <NavLink to={"/users"} className="bg-slate-100 p-2 hover:bg-black hover:text-white flex items-center gap-2">
      <span>
        <FiUsers />
      </span>
       <p>Users</p>
    </NavLink>
   
    
    </div>
  )
}

export default SideBar