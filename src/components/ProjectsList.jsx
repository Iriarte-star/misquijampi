import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Project from "./Project";
const ProjectsList = ({projects}) =>{
    return(
    <section className="flex  flex-col gap-7 place-items-center p-20 mt-20" id="Projects" >
        <div className="flex gap-2">
            {projects.map((project, index)=>(
                <Project
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                description= {project.description}
                />
            ))}
        </div>
            <div>
                <button className=" bg-yellow-400 text-black p-5 rounded-lg flex items-center gap-5">
                    <div className="flex items-center gap-6">
                        <BiSolidShoppingBagAlt/>
                        <p className=" font-mono ">Miskijampi Store </p>
                    </div>
                </button>
            </div>
            <div>
                    <div className="flex items-center gap-6 justify-center">
                        <p className=" font-mono ">estos projectos son financiados y sustentados mediante ofredas y compras de nuestros productos </p>
                    </div>
            </div>
        </section>
    );
};

export default ProjectsList;