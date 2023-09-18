import Navbar from "./components/Navbar"
import CoverFace from "./components/Coverface"
import ProjectsList from "./components/ProjectsList";
import projectsData from "./components/projectsData";
import People from "./components/people";
import CalendarEvent from "./components/CalendarEvent";


const App=()=> {
  return (
<>
    <Navbar/>
    <CoverFace/>
    <div className="flex justify-center items-center h-screen bg-slate-200  ">
      <ProjectsList projects = {projectsData}/>
    </div>
  
    <People/>
    
    <div className="flex justify-center items-center h-screen bg-slate-200 ">
      <CalendarEvent/>
    </div>
</>

  )
}

export default App
