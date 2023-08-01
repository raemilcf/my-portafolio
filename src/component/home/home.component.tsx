import { ExperienceProvider } from "@/src/context/experience.context";

const HomeComponent = () =>{

  return (
   // <PortafolioContext.Provider value={contextValue}>
      <div className='flex px-16 py-12 max-auto sm:py-16 lg:px-20'>
        <div className='flex '>
          <h1>follow</h1>
        </div>

        <div className='px-16 flex flex-col sm:py-16 lg:px-20 gap-10'>
          <ExperienceProvider/>
        </div>

        <div className='flex'>
          <h1>follow</h1>
        </div>
      </div>
    //</PortafolioContext.Provider>
  )
}
export default HomeComponent;