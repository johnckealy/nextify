import Image from 'next/image'
import CTA from '@/components/common/CTA';


const Hero = ({ content }) => {
  return (
    <div className='z-0 md:absolute inset-0 overflow-hidden w-full grow'>
      <div className="relative h-full">
        <Image className="object-cover" alt="Title image" src={content.hero.image} fill priority/>
        <div className="absolute inset-0 w-full h-full ">
          <div className="bg-black opacity-60 w-full h-full" />
        </div>
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <div className='text-white text-center  font-bold flex flex-col justify-center items-center'>
            <h3 className='md:my-4 text-xl md:text-2xl'>Explore the colorful world</h3>
            <span className='border-[1px] border-primary my-3 w-[8%]'></span>
            <h1 className='uppercase text-3xl md:text-7xl font-bold mb-12 md:mb-20 p-1'>A wonderful gift</h1>
            <CTA href="/">Learn More</CTA>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero;
