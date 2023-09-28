import { FaFacebookF, FaInstagram,FaTiktok, FaYoutube} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";


import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full px-4 py-20">
        <div className="mb-5">
          <h1 className="text-center text-yellow-400  text-4xl">Contacto</h1>
          <p className=" text-center text-white py-2">visita nuestras distintas redes sociales o envianos un mensaje  </p>
        </div>
        <div className="grid md:grid-cols-2 items-center gap-5">
            <img src="contact.png" alt="/" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"  />
            <div>
                <div className="grid grid-cols-2 ">

                  <div className="flex  flex-col gap-5 ">
                    <div className="flex gap-2 items-center">
                      <FaFacebookF size={30} className=" text-sky-400"/>
                      <p className="text-white">miskijampi</p>  
                    </div> 
                    <div className="flex gap-2 items-center">
                      <FaInstagram size={30} className=" text-fuchsia-600"/>
                      <p className="text-white">miskijampi</p>  
                    </div> 
                    <div className="flex gap-2 items-center">
                      <FaTiktok size={30} className=" text-white"/>
                      <p className="text-white">miskijampi</p>  
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaYoutube size={30} className=" text-red-500"/>
                      <p className="text-white">miskijampi</p>  
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className=" flex gap-2 items-center">
                      <BiLogoGmail size={30} className=" text-red-500"/>
                      <p className="text-white">Miski@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <BsWhatsapp size={30} className=" text-green-400"/>
                      <p className="text-white">+591 74320607</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <BsTelephone size={30} className=" text-yellow-400"/>
                      <p className="text-white">+591 74320607</p>
                    </div>
                  </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact;