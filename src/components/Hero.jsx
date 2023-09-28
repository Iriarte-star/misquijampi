import { FaForumbee } from "react-icons/fa6";

const Hero =  () => {
  return (
<div className="w-full h-[90vh] relative">
  <img
    src="portada.png"
    alt="/"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
    <div className=" bg-sky-950 bg-opacity-75 p-8 rounded-lg">
      <FaForumbee className="text-yellow-400"/>
      <h1 className="text-4xl font-bold mb-4 text-yellow-400 items-center justify-center">Miskijampi</h1>
      <p className="text-white ">
        un proyecto de <span className="text-green-400 font-semibold text-2xl">Obades</span>
      </p>
    </div>
  </div>
</div>

  




  )
}

export default Hero;