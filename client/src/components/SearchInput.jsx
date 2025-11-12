import React, { Fragment, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const[search,setSearch]=useState("")
  return (
    <Fragment>
       <div className='flex-1 h-10  rounded-full relative'>
         <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search your product here' className='h-full w-full border border-slate-300 rounded-full outline-none focus-visible:border-blue-600 p-3'/>
         {
          search ? (<IoMdClose onClick={()=>setSearch("")} className='absolute top-3 right-4'/>) : <CiSearch className='absolute top-3 right-4'/>
         }
       </div>
    </Fragment>
  )
}

export default SearchInput