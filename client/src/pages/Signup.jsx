import Container from '@/components/Container'
import React, { useEffect, useState } from 'react'
import { cn } from '../components/ui/cn'
import Title from '@/components/Title'
import Input, { Label } from '@/components/Input'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({className}) => {


  // initial state

  const[clientName,setClientName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[checked,setChecked]=useState(false)

  // error state

  const[errorClientName,setErrorClientName]=useState('')
  const[errorEmail,setErrorEmail]=useState('')
  const[errorPassword,setErrorPassword]=useState('')

  const navigate=useNavigate();

  const token=localStorage.getItem('token')

  // console.log("token",token)

  useEffect(()=>{
      if(token) navigate('/')
  },[token])


  const handleName=(e)=>{
   setClientName(e.target.value)
   setErrorClientName('')
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setErrorEmail('')
  }

  const handlePassword=(e)=>{
     setPassword(e.target.value)
     setErrorPassword("")
  }

  const emaiValidation=(email)=>{
    return String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  }
  
  const handleSignUp=async(e)=>{
     e.preventDefault()
     if(!clientName){
      setErrorClientName("Enter your Name")
     }
     if(!email){
      setErrorEmail("Enter your Email")
     }
     else{
       if(!emaiValidation(email)){
        setErrorEmail("Enter a Valid Email")
       }
     }
     if(!password){
      setErrorPassword("Enter your Passord")
     }
     
  }
  

  return (
    <Container>
      <Title className='text-center mb-10'>Create your Account</Title>
       <div className='flex flex-col gap-4 items-center justify-center'>
       <div className='flex gap-2 items-center'>
          <Label htmlFor="Name" className="font-normal">Full Name</Label>
          <Input placeholder="Enter your Name" type="text" value={clientName} onChange={handleName}/>
        </div>
        {
          errorClientName && <p className='text-red'>{errorClientName}</p>
        }
         <div className='flex gap-2 items-center'>
          <Label htmlFor="email" className="font-normal">Work Email</Label>
          <Input placeholder="Enter your Email" type="email" value={email} onChange={handleEmail}/>
        </div>
        {
          errorEmail && <p className='text-red'>{errorEmail}</p>
        }
        <div className='flex gap-2 items-center '>
          <Label htmlFor="password" className="font-normal">Work Password</Label>
          <Input className="border" placeholder="Enter your Password" type="password" value={password} onChange={handlePassword}/>
        </div>
        {
          errorPassword && <p className='text-red'>{errorPassword}</p>
        }
        <div className='flex items-center gap-2'>
          <input type='checkbox'/>
          <p>I agree to Items of service and privacy ploicy</p>
        </div>
        <button onClick={handleSignUp} className='bg-slate-400 max-w-80 w-full p-2'>Create your account</button>
        <p>Already Have Account{""} <Link to="/signin"><span className='text-green-500'>Sign In</span></Link></p>
       </div>
    </Container>
  )
}

export default Signup