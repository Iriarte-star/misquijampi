import { useState, } from "react";
import { FaFacebookF, FaInstagram,FaTiktok, FaBars, FaYoutube} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false) 
    const handleNav = ()=> {
        setNav(!nav)
    }
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
        <ul className=" hidden sm:flex px-4">
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="#gallery">Fotos</a>
            </li>
            <li>
                <a href="#finanzas">finanzas</a>
            </li>
            <li>
                <a href="#contact">Contactos</a>
            </li>

        </ul>
        <div className="flex  justify-between">
            <FaFacebookF  className="mx-4 text-sky-400"/>
            <FaInstagram className="mx-4  text-purple-400"/>
            <FaTiktok className="mx-4 text"/>
            <FaYoutube className="mx-4 text-red-400"/>
        </div>
        <div onClick={handleNav} className="sm:hidden z-10">
            <FaBars size={20} className="mr-4  cursor-pointer text-yellow-400"/>
        </div>
        <div 
            onClick={handleNav}
            className={
                nav
                    ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" 
                     :'absolute top-0 h-screen left-[-100%] ease-in duration-500'
                     }
                     >
            <ul className="h-full w-full text-center pt-12">
                <li className="text-2xl py-8">
                    <a href="/">Inicio</a>
                </li>
                <li className="text-2xl py-8">
                    <a href="#gallery">fotos</a>
                </li>
                <li className="text-2xl py-8">
                    <a href="#finanzas">finanzas</a>
                </li>
                <li className="text-2xl py-8">
                    <a href="#contact">Contactos</a>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar; 