import { FaChevronDown } from "react-icons/fa"
import Link from 'next/link'


const ChevronDownScroller = () => {
  return (
    <div className=" bg-white flex justify-center items-center mx-auto">
      <div className='bg-white rounded-[50%] px-24 py-8 -translate-y-12'>
        <Link href="/#hero-image">
          <FaChevronDown className="w-12 h-12" />
        </Link>
      </div>
    </div>
  )
}
export default ChevronDownScroller;
