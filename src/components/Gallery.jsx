
const Gallery= () => {
  return (
    <div id="gallery" className=" max-w-[1140px] m-auto w-full px-4 py-16"> 
        <h2 className="text-center   text-yellow-400 p-4 text-4xl">Fotos</h2>
        <div className="grid sm:grid-cols-5 gap-4">
            <div className=" sm:col-span-3 col-span-2 row-span-2">
                <img className="w-full h-full object-cover" src="obra1.jpg" alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src="imagen1.jpg" alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src="imagen2.jpg" alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src="imagen3.jpg" alt="" />
            </div>
            <div>
                <img className="w-full h-full object-cover" src="imagen4.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery;