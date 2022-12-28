import Img from '@/components/Img';
import Navbar from '@/components/Navbar'
import Block from '@/components/themes/OutdoorAdventure/Block';
import Carousel from '@/components/common/Carousel';
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
    slides: [
      {
        imgSrc: 'https://source.unsplash.com/xCfHL21VpDk/800x400'
      },
      {
        imgSrc: 'https://source.unsplash.com/21kWTfmnhqo/800x400'
      },
      {
        imgSrc: 'https://source.unsplash.com/1OtUkD_8svc/800x400'
      }
    ]
  },
  carouselBlock2: {
    category: 'Snow Adventure',
    title: "Winter Sports",
    description: "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    slides: [
      {
        imgSrc: 'https://source.unsplash.com/21kWTfmnhqo/800x400'
      },
      {
        imgSrc: 'https://source.unsplash.com/1OtUkD_8svc/800x400'
      },
      {
        imgSrc: 'https://source.unsplash.com/xCfHL21VpDk/800x400'
      }
    ]
  },
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

      <section className='container md:mt-20 my-20'>
        <span className='border-b-[4px] border-primary pb-2'>{content.carouselBlock1.category}</span>
        <Block
          useHr={false}
          className='max-w-3xl '
          blockContent={content.carouselBlock1}>
          <h2 className='my-0'>{content.carouselBlock1.title}</h2>
        </Block>

        <div className='max-w-[800px] mx-auto'>
          <Carousel slides={content.carouselBlock1.slides}  />
        </div>
      </section>

      <section className='container md:mt-20 my-20'>
        <span className='border-b-[4px] border-primary pb-2'>{content.carouselBlock2.category}</span>
        <Block
          useHr={false}
          className='max-w-3xl '
          blockContent={content.carouselBlock2}>
          <h2 className='my-0'>{content.carouselBlock2.title}</h2>
        </Block>

        <div className='max-w-[800px] mx-auto'>
          <Carousel slides={content.carouselBlock2.slides} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
