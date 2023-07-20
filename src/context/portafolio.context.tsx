// import React, { createContext, useContext, useMemo, useState } from "react";
// import { Experience } from "../models/Experience";

// //---------------------funtionality 
// export const activateExperience = (experiences : Experience[], experience : Experience) => {

//     return [...experiences, { ...experience, active: !experience.active }];
// }


// //type of data of my context 
// interface PortafolioConextData {
//     experiences : Experience[];
//     isExperienceActive : (experience : Experience) => void;
//     loadExperiences : (experiences : Experience[]) => void;


// }

// //
// export const PortafolioContext = createContext<PortafolioConextData>({
//     experiences: [],
//     isExperienceActive : () => {},
//     loadExperiences: () => {}

// });

// // Create a helper function to use the context in components
// export function usePortafolioContext() {
//     return useContext(PortafolioContext);
// }
  
// export const PortafolioProvider : React.FC = ( {children} ) => {
    
//     const [experiences, setExperiences] = useState<Experience[]>([]);


//     const loadExperiences = (newExperiences: Experience[]) => {
//         setExperiences([...newExperiences]);
//     }

//     const isExperienceActive = (experience : Experience) => {
//          // Do something with the experience (this is just a placeholder)
//          console.log("Experience active:", experience);
//          // Example of updating the state with the experience
//          setExperiences(activateExperience(experiences, experience));

//     }




//     // Wrap the context value in useMemo to memoize it
//     const contextValue = {
//       experiences,
//       isExperienceActive,
//       loadExperiences
//     };
    
//     return <PortafolioContext.Provider value={contextValue}>{children}</PortafolioContext.Provider>
// }