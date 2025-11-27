import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import Input from "./Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../config";
import toast from "react-hot-toast";

export default function NewUserForm({
  isOpen,
  setIsOpen,
  selectedUser,
  setSelectedUser,
  getUserList,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        _id: selectedUser?._id || null,
        name: selectedUser?.name || "",
        email: selectedUser?.email || "",
        password: "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [selectedUser]);

  const handleAddorUpdateUser = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (selectedUser) {
        response = await axios.put(
          `${serverUrl}/api/user/update/${selectedUser?._id}`,

          formData
        );
      } else {
        response = await axios.post(
          `${serverUrl}/api/user/register`,

          formData
        );

       
      }
       const data =await response?.data;
      if (data?.success) {
          toast.success(data?.message);
          setIsOpen(false)
          getUserList();
        }
        else{
             toast.error(data?.message || "Something went wrong");
        }
    } catch (error) {
      console.log("Failed to Save User", error);
    toast.error(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center  p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-slate-200 shadow-2xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="">
                <div className="flex justify-between">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 text-black font-medium"
                  >
                    {selectedUser ? "Edit User" : "Add User"}
                  </DialogTitle>
                  <button onClick={() => setIsOpen(false)}>
                    <IoMdClose />
                  </button>
                </div>

                <div>
                  <form
                    onSubmit={handleAddorUpdateUser}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <label>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleForm}
                        className="border p-1 focus:shadow-lg rounded-md"
                      />
                      <label>Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleForm}
                        className="border p-1 focus:shadow-lg rounded-md"
                      />
                      <label>Your Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        value={formData.password}
                        onChange={handleForm}
                        className="border p-1 focus:shadow-lg rounded-md"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 text-white rounded-md "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
