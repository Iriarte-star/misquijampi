import { FaFacebookF } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";


const CalendarEvent = () =>{
    return(
        <section className="flex flex-col gap-5">
            <div>
                <h1 className=" text-4xl font-semibold">CALENDARIO</h1>
                <h2>estas fechas estaremos de misiones, puedes ver la  obra mediante nuestras redes sociales.</h2>
            </div>
            <div className=" bg-amber-50  p-5 ">
                <div className="flex gap-20 items-center ">
                    <div className="">
                        <h1 className="text-4xl font-extrabold text-yellow-400">25</h1>
                        <h2 className="text-xl">Miercoles</h2>
                    </div>
                    <div>
                        <div className="font-bold pb-4">Cosecha</div>
                        <p>viaje misionero mediante la cosecha de miel, llevaremos evangelismo ilustrado y videos</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <FaFacebookF className="w-6 h-6 text-sky-600 "/>
                        <BiLogoTiktok className="w-6 h-6 text-black "/>                
                    
                    </div>
                </div>
            </div>
            <div className=" bg-amber-50  p-5 ">
                <div className="flex gap-20 items-center ">
                    <div className="">
                        <h1 className="text-4xl font-extrabold text-yellow-400">25</h1>
                        <h2 className="text-xl">Miercoles</h2>
                    </div>
                    <div>
                        <div className="font-bold pb-4">Cosecha</div>
                        <p>viaje misionero mediante la cosecha de miel, llevaremos evangelismo ilustrado y videos</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <FaFacebookF className="w-6 h-6 text-sky-600 "/>
                        <BiLogoTiktok className="w-6 h-6 text-black "/>                
                    
                    </div>
                </div>
            </div>
            <div className=" bg-amber-50  p-5 ">
                <div className="flex gap-20 items-center ">
                    <div className="">
                        <h1 className="text-4xl font-extrabold text-yellow-400">25</h1>
                        <h2 className="text-xl">Miercoles</h2>
                    </div>
                    <div>
                        <div className="font-bold pb-4">Cosecha</div>
                        <p>viaje misionero mediante la cosecha de miel, llevaremos evangelismo ilustrado y videos</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <FaFacebookF className="w-6 h-6 text-sky-600"/>
                        <BiLogoTiktok className="w-6 h-6 text-black"/>                
                    
                    </div>
                </div>
            </div>
            
            
        
        </section>

    );
};
export default CalendarEvent;