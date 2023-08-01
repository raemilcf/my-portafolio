import { createContext } from "react";
import { PortafolioConextData } from "./portafolio_interface";
import { About } from "../models/About";
import { Presentation } from "../models/Presentation";

 //create context
 export const PortafolioContext = createContext<PortafolioConextData>({
    about : {} as About,
    presentation: {} as Presentation,
    projects : [],
    experiences : [],
    isExperienceActive : () => {},
    loadExperiences: () => {}
  
  });