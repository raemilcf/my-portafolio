import { AboutProvider } from "@/src/context/about.context";
import { ExperienceProvider } from "@/src/context/experience.context";
import { ProjectProvider } from "@/src/context/project.context";
import LeftSidebarComponent from "../sidebar/left/left_sidebar.componet";
import { ContactProvider } from "@/src/context/contact.context";

import { Heart } from "react-feather";
import BottomComponent from "../sidebar/bottom/bottom.component";
import HeaderComponent from "../header/header.component";
import { HeaderProvider } from "@/src/context/header.context";


const HomeComponent = () =>{

  
  return (
    <>
        <HeaderProvider/>
        {/* display all the content  */}
        <main> 
            <div className="relative">
              <LeftSidebarComponent/>
              <div className=' px-10 py-12 overflow-auto flex flex-col sm:px-[15%]'>
                <AboutProvider/>
                <ExperienceProvider/>
                <ProjectProvider/>
                <ContactProvider/>
              </div>
              <footer className=' mt-auto mb-2 '>
                <div className='flex flex-col justify-center items-center '>
                  <BottomComponent></BottomComponent>
                  <p className='flex flex-row items-center text-xs lg:text-lg gap-2'>Made with <Heart className="w-3 sm:w-5" color="white" size={18}/> </p>
                  <p className='text-xs lg:text-lg'>&#169; Copyright 2023 Raemil </p>
                </div>     
              </footer>
            </div>
        </main>
    </>
  )
}
export default HomeComponent;