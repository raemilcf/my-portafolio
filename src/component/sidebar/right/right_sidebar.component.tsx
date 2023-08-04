
import { Mail } from 'react-feather'

const RightSidebarComponent = ()  => {

    return (
      //   <div className='fixed bottom-3 right-0 w-32 '>
      //     <div className="-rotate-90 flex flex-row">
      //       <a target='_blank' href="mailto:raemilcorniel@hotmail.com">
      //         <p className="tracking-wider text-pink-300 ">raemilcorniel@hotmail.com</p>
            
      //       </a>
      //       <div >
      //         <hr className="w-8 h-2 border-1 border-gray-300 border-dashed "/>
      //       </div>
      //     </div>
        
          
      // </div>
       <div className='fixed bottom-3 right-0 w-32 '>
       <div className="flex flex-col gap-4 items-center m-0 p-0">
        <a target='_blank' href="mailto:raemilcorniel@hotmail.com">
          <Mail color="#F9A8D4" size={18}/>
        </a>
       </div>
       <div className="mr-2 mt-20 rotate-90">
         <hr className="w-46 h-2 border-1 border-pink-300 border-dashed "/>
       </div>
   </div>
    )
}

export default RightSidebarComponent;