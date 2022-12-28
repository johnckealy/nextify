import Img from '@/components/Img';
import Navbar from '@/components/Navbar'
import Block from '@/components/themes/OutdoorAdventure/Block';
import Footer from '@/components/themes/OutdoorAdventure/Footer';
import Card from '@/components/themes/OutdoorAdventure/Card';

const content = {
  hero: {
    image: 'https://source.unsplash.com/phIFdC6lA4E/2200x500',
    title: "Services",
  },
  block1: {
    title: "It's time to start your adventures",
    description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.",
  },
  cards: [
    {
      imageSrc: 'https://source.unsplash.com/9xlVM_64EdE/700x350',
      title: 'Backpacking Trips',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
    },
    {
      imageSrc: 'https://source.unsplash.com/gT4CV0juw4s/700x350',
      title: 'Family Hiking Trips',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
    },
    {
      imageSrc: 'https://source.unsplash.com/FqQG4W7VdTM/700x350',
      title: 'Water Sports',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
    },
    {
      imageSrc: 'https://source.unsplash.com/SoC1ex6sI4w/700x350',
      title: 'Winter Sports',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
    }
  ],
  block2: {
    title: "Why Outdoor Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  block3: {
    title: "What You Get",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
}


const Services = () => {
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


      {/* Cards Section */}
      <section className='container md:mt-32 my-20'>
        <Block className='max-w-3xl flex flex-col !items-center mx-auto mb-10 md:mb-20' blockContent={content.block1} >
          <h2 className='m-0'>{content.block1.title}</h2>
        </Block>
        <div className='sgrid max-w-5xl mx-auto'>
          {content.cards.map((card, index) => (
            <Card cardContent={card} key={index} />
          ))}
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

export default Services;
