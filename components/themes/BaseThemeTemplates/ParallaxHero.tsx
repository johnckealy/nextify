import React from "react"
import Link from "next/link"
import FadeinLetterByLetter from "@/components/animations/FadeInLetterByLetter"

// It's necessary to add the following to your CSS file
//
// #er3243 {
//   background-image: url('https://source.unsplash.com/iPCWM76wRrs/2200x500');
//   background-image: image-set(
//     "https://source.unsplash.com/iPCWM76wRrs/2200x500" 1x,
//     "https://source.unsplash.com/iPCWM76wRrs/2200x500" 2x
//   );
// }


const SubHeadingWithSurroundingLines = ({ content }: { content: string }) => {
  return (
    <>
      <div className="flex font-secondary text-accent relative grid-cols-2">
        <div className="border-b-2 w-12 mx-2 border-accent -translate-y-[40%]"></div>
        <span className="uppercase text-xl">{content}</span>
        <div className="border-b-2 w-12 mx-2 border-accent -translate-y-[40%]"></div>
      </div>
    </>
  )
}




const HeroBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="hero-image" className="grid bg-cover bg-center md:bg-fixed">
      <div className="grid bg-black bg-opacity-70">
        <div className="grid place-items-center my-72  text-white">
          {children}
        </div>
      </div>
    </div>
  )
}


const CTA = ({ label, href }: { label: string, href: string }) => {
  return (
    <Link href={href}>
      <button className="btn btn-outline btn-secondary hover:!text-black  btn-wide font-normal my-10 font-primary tracking-widest">
        {label}
      </button>
    </Link>
  )
}






const Hero = () => {
  return (
    <>
      <HeroBg>
        <div className="flex flex-col items-center justify-center text-center">
          <SubHeadingWithSurroundingLines content="Welcome To" />
          <h1 className="font-secondary text-white mb-6 mt-2 font-bold text-7xl">Salt Chef Events</h1>

          <FadeinLetterByLetter className="opacity-80"
            sentence="The Most Exclusive Private Chef Experience \ in North Carolina" />

          <CTA label="View Sample Offers" href="/" />
        </div>
      </HeroBg>
    </>
  )
}

export default Hero
