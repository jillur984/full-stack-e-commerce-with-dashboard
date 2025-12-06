import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../config";
import toast from "react-hot-toast";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Loader from "../components/ui/Loader";
import PriceFormat from "../components/PriceFormat";
import { IoMdClose } from "react-icons/io";

const List = ({token}) => {
  const [loading, setIsLoading] = useState(false);
  const [list, setList] = useState(null);

  const fetchProductList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(serverUrl + "/api/product/list");
      const data = response?.data;

      if (data?.success) {
        setList(data?.products);
      }
    } catch (error) {
      console.log("Fetch to Fetch Product List", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);



  const handleRemoveProduct=async(id,item)=>{
     const confirmRemoval=window.confirm(`Are you want to delete this ${item.name}`)
     if(confirmRemoval){
      try {
        setIsLoading(true)
        const response=await axios.post(serverUrl + "/api/product/remove",{_id:item?._id},{
          headers:{token}
        })
        const data=response?.data
        if(data.success){
          toast.success(data?.message)
          await fetchProductList()
        }
        else{
          toast.error(data?.message)
        }
      } catch (error) {
        console.log("Product Removal Error",error.message)
        toast.error(error?.message)
      }
      finally{
        setIsLoading(false)
      }
     }
  }


  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between">
            <Title>Product List</Title>
            <Link
              to="/add"
              className="bg-black text-white hover:text-orange-400 p-2 rounded-md"
            >
              Add Product +
            </Link>
            </div>
           <div className="flex flex-col gap-2">
             {
              list?.length>0 ? <div>
               <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-2 px-2 my-1.5  bg-gray-200">
                 <b>
                  Image
                </b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
                <b>Edit</b>

               </div>

               {
                list.map((item)=>{
                  console.log(item)
                  return (
                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 my-1.5 border-gray-200 bg-gray-200 ">
                    <img src={item.images[0]} alt="productImage" className="w-16"/>
                    <p className="line-clamp-1 font-semibold">{item.name}</p>
                    <p>{item.category}</p>
                    <p><PriceFormat amount={item.price}/></p>
                    <div className="flex items-center">
                      <IoMdClose onClick={()=>handleRemoveProduct(item._id,item)} className="flex items-center mx-4 cursor-pointer"/>
                    </div>
                    <Link to="/add">Edit</Link>
                    </div>
                  )
                })
               }
              

              </div>:(
               <>
                 <div className="text-red-500"><p>You have no Products</p></div>
                 <Link to="/add">Add Products</Link>
               </>
                
              )
            }
           </div>
          
        </>
      )}
    </div>
  );
};

export default List;
