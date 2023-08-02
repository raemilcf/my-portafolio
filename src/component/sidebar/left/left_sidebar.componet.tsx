import Image from "next/image";


const LeftSidebarComponent = () => {

    return (
        <div className='fixed left-0 w-32 h-screen'>
        <div className=" sticky top-[70%]">
          <div className="flex flex-col gap-4 items-center m-0 p-0">
            <a target="_blank" href="https://linkedin.com/in/raemilcorniel">
              <Image
              src="/linkedin.svg"
              alt='linkedin image'
              width={20}
              height={20}
              />
            </a>
            <a target="_blank" href="https://github.com/raemilcf">
              <Image
              src="/github.svg"
              alt='github image'
              width={20}
              height={20}
              />
            </a>
          </div>
          <div className="mr-2 mt-20 rotate-90">
            <hr className="w-46 h-2 border-1 border-gray-300 border-dashed "/>
          </div>
        </div>
      </div>
    )
}

export default LeftSidebarComponent;