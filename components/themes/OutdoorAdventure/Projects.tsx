import Img from '@/components/Img';
import Navbar from '@/components/Navbar'
import CarouselBlock from '@/components/themes/OutdoorAdventure/CarouselBlock';
import Footer from '@/components/themes/OutdoorAdventure/Footer';

const content = {
  hero: {
    image: 'https://source.unsplash.com/ix2rNtPgEWI/2200x500',
    title: "Our Projects",
  },
  carouselBlock1: {
    category: 'Adventure',
    title: "Water Sports",
    description: "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
  },
}


const Services = () => {
  return (
    <>
      <div className='relative'>

        <Navbar className="z-10 md:text-white absolute top-0" />

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


      <section className='container md:mt-20 my-20'>
        <CarouselBlock carouselBlockContent={content.carouselBlock1} />
      </section>


      <Footer />
    </>
  );
}

export default Services;
