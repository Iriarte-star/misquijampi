import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";



const Coverface = ()=> {
  const paisaje = {
    backgroundImage: "url('./public/portada.png')"
  }
    return(
        <section className="bg-cover w-full h-full " style={paisaje} >
            <div className=" flex items-center justify-between">
              <div className="  flex-nowrap">
                <div className="flex flex-col items-center gap-5   p-44">
                    <h1 className="text-3xl text-white font-bold">
                        HOLA!
                    </h1>
                    <p className="text-3xl font-bold text-white">
                      <span className="font-semibold">Somos</span> <span className="p-2 rounded-md  text-yellow-400  font-borel">MisquiJampi</span> 
                    </p>
                    <div className="bg-slate-800 flex gap-5 p-5 rounded-lg">
                      <FaFacebookF className="text-sky-400 "/>
                      <FaInstagram className="text-green-400"/>
                      <FiYoutube className="text-red-500"/>
                      <BiLogoTiktok className="text-white"/>
                    </div>
                </div>
              </div>
            </div>
            <section className="flex flex-col bg-yellow-400 items-center gap-3 p-5">
            <div>
                <h1 className="text-xl font-bold">2,625,178</h1>
            </div>
            <div className="">
                <p className=" text-white">Unete a nosotros y se parte del cambio de vida que el evangelio produce en las familias mediante nuestros projectos
                    tu suscripcion nos ayuda a seguir adelante.
                </p>
            </div>
            <div>
                <button className="bg-slate-50 p-2 rounded-md font-bold">unirme ahora</button>
            </div>
        </section>
        </section>


    );
};


export default Coverface;