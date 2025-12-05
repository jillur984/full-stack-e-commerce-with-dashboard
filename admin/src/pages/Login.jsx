import React, { useState } from "react";
import axios from "axios"
import { serverUrl } from "../config";
import toast from "react-hot-toast"

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit=async(e)=>{
    e.preventDefault()
  try {
    const response=await axios.post(serverUrl + '/api/user/admin_login',{
        email,password
    })
    const data=response?.data;
    console.log(data)
    if(data){
      localStorage.setItem("token", data.token);
        setToken(data?.token)
        toast.success(data?.message)
        
    }
  } catch (error) {
    console.log("Error",error.message)
    toast.error(error?.message)
  }

  }


  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} class="flex flex-col gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
