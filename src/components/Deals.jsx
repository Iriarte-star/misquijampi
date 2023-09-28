import { IoStorefront } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";

const Deals = () => {
  return (
    <div id="finanzas" className="container mx-auto  px-12  py-20">
    <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">Finanzas</h1>
    <p className="text-center mb-8 text-white">Apoya nuestros proyectos de 2 maneras</p>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col items-center p-5 text-cente ">
        <div className="mb-4">
          <IoStorefront size={120} className="text-green-400" />
        </div>
        <p className=" mb-4 text-white text-center">
          Disfruta de nuestros productos de alta calidad y sé parte del crecimiento de nuestras comunidades.
        </p>
        <button className="px-4 py-2 bg-blue-500  text-green-950 font-bold rounded-md hover:bg-blue-600">
          Ir a la tienda
        </button>
      </div>
      <div className="flex flex-col items-center p-5 text-center ">
        <div className="mb-4">
          <BsQrCode size={120} className="text-white" />
        </div>
        <p className="mb-4 text-white">
          Conocemos tu deseo de ayudar, por eso creamos una cuenta especial para esta comunidad. Todo el dinero será para hacer posible más proyectos para las familias que cuidamos.
        </p>
      </div>
    </div>
  </div>
  


   
  )
}

export default Deals