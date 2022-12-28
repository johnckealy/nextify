import Img from '@/components/Img';
import Navbar from '@/components/Navbar'
import Block from '@/components/themes/OutdoorAdventure/Block';
import Footer from '@/components/themes/OutdoorAdventure/Footer';


const content = {
  hero: {
    image: 'https://source.unsplash.com/mgJSkgIo_JI/w=1000',
    title: "Who We Are?",
    subtitle: ''
  },
  block1: {
    title: "Our Mission",
    description: "Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. \nClick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    cta: {
      label: "Learn More",
      href: "/"
    },
    image: "https://source.unsplash.com/PKLoOomB5Cs/w=650"
  },
  block2: {
    title: "Extraordinary Experiences",
    description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  block3: {
    title: "Our Core Values",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
}


const About = () => {
  return (
    <>
      <div className='relative'>

      <Navbar className="z-10 text-black  md:text-white md:absolute md:top-0" />

        {/* Hero block */}
        <Img src={content.hero.image} alt="title image" priority fullWidth>
          <div className='absolute inset-0 bg-black opacity-40' />
          <div className='relative md:px-32 py-20 md:py-44 '>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center text-white uppercase font-montserrat font-bold'>{content.hero.title}</h1>
            </div>
          </div>
        </Img>
      </div>


      <section className='container my-5 md:my-20'>
        <div className='sgrid'>
          <Block blockContent={content.block1} >
            <h2 className='leading-normal'>{content.block2.title}</h2>
          </Block>
          <div className='relative w-full'>
            <Img src={content.block1.image} alt="" containerClassName='h-44 md:h-96' />
          </div>
        </div>
      </section>


      <section className='container my-20'>
        <div className='sgrid'>
          <Block blockContent={content.block2} >
            <h3>{content.block2.title}</h3>
          </Block>
          <Block blockContent={content.block2} >
            <h3>{content.block3.title}</h3>
          </Block>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
