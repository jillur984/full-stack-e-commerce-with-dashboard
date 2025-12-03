import { useState } from "react";
import Title from "../components/Title";
import { IoMdCloudUpload } from "react-icons/io";
import Input, { Label } from "../components/Input";
import SmallLoader from "../components/ui/SmallLoader";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../config";
import {useNavigate} from "react-router-dom"
const Add = ({token}) => {
  const[loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    _type: "",
    name: "",
    description: "",
    brand: "",
    price: "",
    discountedPercentage: 10,
    stock: "",
    category: "",
    offer: false,
    isAvailable: true,
    badge: false,
    tags: [],
    image1: null,
    image2: null,
    image3: null,
  });

  const naviagte=useNavigate()

  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setFormData({
      ...formData,
      [id]: files[0],
    });
    console.log(files[0]);
  };

  console.log(formData);

  const handleInputChange = (e) => {
    const{name,value,checked,type}=e.target;
    if(type==="checkbox"){
      setFormData({
        ...formData,
        [name]:checked
      })
    }
    else{
      setFormData({
        ...formData,
        [name]:value
      })
    }
  };

  const handleProductAddData = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    const response = await axios.post(
      serverUrl + "/api/product/add",
      data,
      {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const resposneData=await response?.data

    if(resposneData.success){
      toast.success(resposneData?.message)
      naviagte("/list")
    }
    else{
      toast.error(resposneData?.message)
    }

    console.log("Product added successfully:", response.data);
    toast.success("Product added successfully!");

  } catch (error) {
    console.log("Product Data uploading Error", error);
    toast.error(error.message);

  } finally {
    setLoading(false);
  }
};


  return (
    <section className="max-w-xl">
      <Title>Upload Products to Database</Title>
      <form onSubmit={handleProductAddData}>
        <div className="flex items-center gap-3">
          {["image1", "image2", "image3"].map((imageId) => (
            <label key={imageId} htmlFor={imageId}>
              <div className="text-gray-500 border-2 border-dashed border-gray-500 hover:border-black duration-300 ease-in-out px-4 py-2 cursor-pointer rounded-md">
                {formData[imageId] ? (
                  <img
                    alt="preview"
                    src={URL.createObjectURL(formData[imageId])}
                    className="w-20 h-20 object-cover"
                  />
                ) : (
                  <IoMdCloudUpload className="text-5xl h-20 w-20 object-cover" />
                )}

                <p>{formData[imageId] ? "Change" : "Upload"}</p>

                {/* {
                
                  console.log(" Image Id",imageId)
                } */}

                <input
                  type="file"
                  hidden
                  id={imageId}
                  onChange={handleImageChange}
                />
              </div>
            </label>
          ))}
        </div>

        {/* image work done , here work other label */}

        <div className="flex flex-col gap-2 max-w-full mt-5 ">
          <Label htmlFor="name">Product Name</Label>
          <Input
            type="text"
            disabled={loading}
            placeholder="type product name here"
            name="name"
            className="border border-gray-400 outline-0 p-2"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col  gap-2 max-w-full mt-5 ">
          <Label htmlFor="description">Product Description</Label>
          <textarea
            rows={5}
            className="border resize-none outline-0 border-gray-400"
            name="description"
            placeholder="Type product description here"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col  gap-2 max-w-full mt-5 ">
          <Label htmlFor="brand">Product Brand</Label>
          <Input
            type="text"
            placeholder="type product Brand here"
            name="brand"
            className="border border-gray-400 outline-0 p-2"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex  gap-4">
          <div className="flex flex-col  gap-2 max-w-full mt-5 ">
            <Label htmlFor="price">Product Price</Label>
            <Input
              type="number"
              placeholder="type product Price here"
              name="price"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="brand">Product Discount</Label>
            <Input
              type="number"
              placeholder="type product discount % here"
              name="discountedPercentage"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="Type">Product Type</Label>
            <select
              type="text"
              name="_type"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            >
              <option value="new_arrivals">New Arrivals</option>
              <option value="best_sellers">Best Sellers</option>
              <option value="special_offer">Special Offer</option>
              <option value="promotions">Promotions</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="Type">Product category</Label>
            <select
              type="text"
              name="category"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            >
              <option value="mens">Mens</option>
              <option value="womens">Womens</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="offer">Offer</Label>
            <select
              type="text"
              name="offer"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="available">isAvailable</Label>
            <select
              type="text"
              name="isAvailable"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 max-w-full mt-5 ">
            <Label htmlFor="available">Badge</Label>
            <select
              type="text"
              name="badge"
              className="border border-gray-400 outline-0 p-2"
              onChange={handleInputChange}
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
        </div>

        {/* working for tags */}

        <div className="flex flex-col  gap-2 max-w-full mt-5 ">
          <Label htmlFor="tags">Tags</Label>
          <div className="flex flex-col gap-3">
            {["Fashion", "Electronics", "Sports", "Accessories", "Others"].map(
              (tag) => (
                <div className="flex gap-2">
                  <Input type="checkbox" name="tags" value={tag} id={tag.toLowerCase()} className="cursor-pointer" onChange={(e)=>{
                    if(e.target.checked){
                      setFormData((prevData)=>({
                        ...prevData,
                        tags:[...prevData.tags,tag]
                      }))
                    }
                    else{
                      setFormData((prevData)=>({
                        ...prevData,
                        tags:prevData.tags.filter((t)=>t!==tag)
                      }))
                    }
                  }}/>
                  <p>{tag}</p>
                </div>
              )
            )}
          </div>
        </div>
          <button type="submit" disabled={loading} className="bg-black text-white flex gap-4 p-2 mt-3 w-20 items-center">Add {loading ? <span><AiOutlineLoading3Quarters /></span> :"+"}</button>
      </form>

    
    </section>
  );
};

export default Add;
