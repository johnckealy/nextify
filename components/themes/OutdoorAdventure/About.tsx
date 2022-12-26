import Navbar from "@/components/Navbar";
import Hero from "@/components/themes/OutdoorAdventure/Hero";



const content = {
  hero: {
    image: 'https://source.unsplash.com/s-y2HJElONo/w=1000',
    title: "WHO WE ARE?",
    subtitle: ''
  }
}


const About = () => {
  return (
    <>
      <div className=''>
        {/* <Navbar className="z-10 bg-opacity-0 md:text-white" /> */}
        <Hero content={content} />
      </div>
    </>
  );
}

export default About;
