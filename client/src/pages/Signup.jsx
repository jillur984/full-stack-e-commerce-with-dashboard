import Container from '@/components/Container'
import React from 'react'
import { cn } from '../components/ui/cn'
import Title from '@/components/Title'
import Input, { Label } from '@/components/Input'
import { Link } from 'react-router-dom'

const Signup = ({className}) => {
  return (
    <Container>
      <Title className='text-center mb-10'>Create your Account</Title>
       <div className='flex flex-col gap-4 items-center justify-center'>
       <div className='flex gap-2 items-center'>
          <Label htmlFor="Name" className="font-normal">Full Name</Label>
          <Input placeholder="Enter your Email" type="text"/>
        </div>
         <div className='flex gap-2 items-center'>
          <Label htmlFor="email" className="font-normal">Work Email</Label>
          <Input placeholder="Enter your Email" type="email"/>
        </div>
        <div className='flex gap-2 items-center '>
          <Label htmlFor="password" className="font-normal">Work Password</Label>
          <Input className="border" placeholder="Enter your Password" type="password"/>
        </div>
        <button className='bg-slate-400 max-w-80 w-full p-2'>Create your account</button>
        <p>Already Have Account{""} <Link to="/signin"><span className='text-green-500'>Sign In</span></Link></p>
       </div>
    </Container>
  )
}

export default Signup