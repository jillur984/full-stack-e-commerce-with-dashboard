import { useState } from "react";
import MyContext from "../context";

  

const MyContextProvider=({children})=>{

  const [data,setData]=useState("Hello from Jillur Rahman")

    return (
        <MyContext.Provider value={{data,setData}}>{children}</MyContext.Provider>
    )

}
export default MyContextProvider;