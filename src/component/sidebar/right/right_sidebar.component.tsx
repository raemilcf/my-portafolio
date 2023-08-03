

const RightSidebarComponent = ()  => {

    return (
        <div className='fixed right-0 w-32 h-screen'>
        <div className=" sticky top-[65%] ">
          <a target='_blank' href="mailto:raemilcorniel@hotmail.com" className="rotate-90  flex flex-row" >
            <p className="tracking-wider hover:text-pink-300 ">raemilcorniel@hotmail.com</p>
            <div className="mt-3 ml-2">
              <hr className="w-8 h-2 border-1 border-gray-300 border-dashed "/>
            </div>
          </a>
        </div>
      </div>
    )
}

export default RightSidebarComponent;