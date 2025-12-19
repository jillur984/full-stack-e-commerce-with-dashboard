import React from 'react'
import { cn } from './ui/cn'


export const Label=({htmlFor,className,children})=>{
   return (
    <label className={cn("font-semibold text-sm tracking-tight",className)}>{children}</label>
   )
}

const Input = ({type,name,id,placeholder,className,value,onChange}) => {
  return (
    <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} className={cn("border rounded-md",className)}/>
  )
}

export default Input