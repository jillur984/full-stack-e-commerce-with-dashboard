import React, { useEffect, useState } from 'react'
import axios from "axios"
import { serverUrl } from '../config'
import toast from 'react-hot-toast'
import { IoMdClose } from 'react-icons/io'
import { MdDelete } from "react-icons/md";
import Title from '../components/Title'
const Users = ({token}) => {

  const[userList,setUserList]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  const[selectedUser,setSelectedUser]=useState("")

  const getUserList=async()=>{
    try {
      
      const response=await axios.get(serverUrl+"/api/user/users",{
        headers:{
          token,
          "Content-Type":"application/json",
        }
      })
      const data=response?.data
     
      if(data?.success){
        setUserList(data?.users)
      }
     
      else{
        toast.error(data?.message)
      }
    } catch (error) {
      console.log("User Fetch Error",error.message)
      toast.error(error?.message)
    }
  }

  useEffect(()=>{
   getUserList()
   console.log(userList)
  },[])

  const handleDeleteUser=async(id)=>{
    const confirmRemoval=window.confirm("Are you sure you Delete That User")
    if(confirmRemoval){
      setIsLoading(true)
      try {
        const response=await axios.post(serverUrl+"/api/user/remove",{
          _id:id
        })

        const data=response?.data
        if(data?.success){
          toast.success(data?.message)
          await getUserList();
        }
      } catch (error) {
        console.log("User Removed Error",error)
        toast.error(error?.message)
      }
      finally{
        setIsLoading(false)
      }
    }
  }

  return (
    <>
    {
      userList.length >0 ? (<div>
        <h1>Welcome to User List</h1>
     <div className='flex justify-between items-center max-w-[690px] mb-2'>
          <Title>User List</Title>
        <button className='bg-slate-500 p-1 px-4'>Add user</button>
     </div>
        <div className='max-w-3xl flex flex-col gap-6'>
         <div className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 '>
           <b>Name</b>
           <b>Email</b>
            <b>IsAdmin</b>
           <b>Action</b>
          
           <b>Edit</b>
         </div>
         {userList.map((user)=>{
          return (
            <div key={user._id} className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-1 px-2  '>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
              {user?.isAdmin ? <p className='text-red-500'>Admin</p> :"User"}
              <MdDelete onClick={()=>handleDeleteUser(user._id)} className='text-center text-black/80 hover:text-red-800 text-[20px] mx-4'/>
                
              <button className='text-start w-full cursor-pointer mx-1'>Edit</button>
            </div>
          )
         })}
        </div>
      </div>):(
        <div>
          <h1>No User have</h1>
        </div>
      )
    }
    </>
  )
}

export default Users