import { About } from "../models/About";
import { Experience } from "../models/Experience";
import { Presentation } from "../models/Presentation";
import { Projects } from "../models/Projects";

//type of data of my context 
export interface PortafolioConextData {
    about : About;
    presentation: Presentation;
    projects : Projects[];
    experiences : Experience[];
  
    isExperienceActive : (experience : Experience) => void;
    loadExperiences : (experiences : Experience[]) => void;
  
  }