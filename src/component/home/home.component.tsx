import { AboutProvider } from "@/src/context/about.context";
import { ExperienceProvider } from "@/src/context/experience.context";
import { ProjectProvider } from "@/src/context/project.context";
import LeftSidebarComponent from "../sidebar/left/left_sidebar.componet";
import { Heart } from "react-feather";
import { ContactProvider } from "@/src/context/contact.context";

const HomeComponent = () =>{

  return (
      <div className="relative">
       <LeftSidebarComponent/>

       
        <div className='px-[15%] py-12 overflow-auto flex flex-col'>
          <AboutProvider/>
          <ExperienceProvider/>
          <ProjectProvider/>
          <ContactProvider/>
        </div>
        <footer className=' mt-auto mb-2 '>
                    <div className='flex flex-col justify-center items-center '>
                        <p className='flex flex-row items-center text-lg gap-2'>Made with <Heart color="white" size={18}/> </p>
                        <p className='text-lg'>&#169; Copyright 2023 Raemil </p>
                    </div>
                </footer>


      </div>
  )
}
export default HomeComponent;