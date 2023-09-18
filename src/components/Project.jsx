
const Project = ({imageUrl,title, description})=>{
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imageUrl} alt={title}/>
            <div className="px-6 p-4">
                <div className=" font-bold  text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
        </>
    )
}
 
export default Project;




