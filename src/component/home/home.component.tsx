import { AboutProvider } from "@/src/context/about.context";
import { ExperienceProvider } from "@/src/context/experience.context";
import { ProjectProvider } from "@/src/context/project.context";
import LeftSidebarComponent from "../sidebar/left/left_sidebar.componet";
import RightSidebarComponent from "../sidebar/right/right_sidebar.component";

const HomeComponent = () =>{

  return (
      <div className="relative">
       <LeftSidebarComponent/>
       
        <div className='px-44 py-12 overflow-auto flex flex-col'>
          <AboutProvider/>
          <ExperienceProvider/>
          <ProjectProvider/>
        </div>

        <RightSidebarComponent/>

      </div>
  )
}
export default HomeComponent;