
const Activities=()=> {
  return (
    <div className="max-w-[1140px]  md:flex m-auto w-full mt-[-75px]">
        <div className="relative p-4">
            <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">Misque</h3>
            <img  className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="lugar1.png" alt="" />
        </div>
        <div className="relative p-4">
            <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">TinTin</h3>
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg"  src="lugar2.png" alt="" />
        </div>
        <div className="relative p-4">
            <h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">RumyCorral</h3>
            <img className="w-full h-full object-cover relative border-4 border-white shadow-lg"  src="lugar3.png" alt="" />
        </div>        
    </div>
  )
}

export default Activities;