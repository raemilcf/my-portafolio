
import { Mail } from 'react-feather'
import Image from "next/image";


const BottomComponent = ()  => {

    return (
     
      <div className="flex flex-row gap-4 items-center m-0 p-0 mb-2 sm:invisible">
        <a target='_blank' href="mailto:raemilcorniel@hotmail.com">
          <Mail color="#F9A8D4" size={14}/>
        </a>
        <a target="_blank" href="https://linkedin.com/in/raemilcorniel">
          <Image
          src="/linkedin.svg"
          alt='linkedin image'
          width={14}
          height={14}
          />
        </a>
        <a target="_blank" href="https://github.com/raemilcf">
          <Image
          src="/github.svg"
          alt='github image'
          width={14}
          height={14}
          />
        </a>
      </div>
    )
}

export default BottomComponent;