import { FaSpinner } from "react-icons/fa6";

const Loader = () => {
  return (
    <div className="text-4xl w-full h-full text-orange-500 flex flex-col items-center py-40 justify-center ">
        <FaSpinner className="animate-spin"/>
        <p className="text-lg">Loading</p>
    </div>
  )
}

export default Loader