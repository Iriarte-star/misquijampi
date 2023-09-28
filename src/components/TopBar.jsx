import { FaRegClock } from "react-icons/fa";
import {CgBee} from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
const TopBar =()=> {
  return (
    <div className=" flex justify-between px-4 py-2">
        <div className=" flex items-center">
          <CgBee size={30} className="   text-yellow-400 mr-2"/>
          <h1 className=" text-xl font-bold text-white">MiskiJampi</h1>
        </div>
        <div className="flex">
          <div className=" hidden md:flex items-center px-6">
            <FaRegClock size={20} className="mr-2 text-yellow-400"/>
            <p className="text-md text-white">9AM - 6PM</p>
          </div>
          <div className=" hidden md:flex items-center px-6">
            <BsTelephone size={20} className="mr-2 text-yellow-400"/>
            <p className="text-md text-white">+591 74320607</p>
          </div>
          <button className=" text-green-950 font-bold rounded-lg " >Ofrendar</button>
        </div>
    </div>
  )
}

export default TopBar;