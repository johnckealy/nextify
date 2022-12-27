import Img from '@/components/Img'
import CTA from '@/components/common/CTA'
import Navbar from '@/components/Navbar'
import QuoteBlock from '@/components/themes/OutdoorAdventure/QuoteBlock'
import Heading from '@/components/themes/OutdoorAdventure/Heading'
import Card from '@/components/themes/OutdoorAdventure/Card'
import Block from '@/components/themes/OutdoorAdventure/Block'
import Footer from '@/components/themes/OutdoorAdventure/Footer'


const content = {
  hero: {
    image: '/images/hero-bg.jpg',
    title: 'A Wonderful Gift',
    subtitle: 'Explore the Colourful World',
    cta: {
      label: 'Learn More',
      href: '/'
    }
  },
  quoteText: '"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris"',
  quoteAuthor: 'Jim Farrey',
  cardsHeader: 'Upcoming Events',
  cards: [
    {
      imageSrc: 'https://source.unsplash.com/48nerZQCHgo/w=600',
      title: 'Everest Camp Trek',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
      cta: {
        label: 'Learn More',
        href: '/'
      }
    },
    {
      imageSrc: 'https://source.unsplash.com/Gvre66F3ye0/w=600',
      title: 'Walking Holidays',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
      cta: {
        label: 'Learn More',
        href: '/'
      }
    }
  ],
  block1: {
    title: 'Explore the world',
    image: 'https://source.unsplash.com/Yizrl9N_eDA/w=600',
    description: 'Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.',
    cta: {
      label: 'Learn More',
      href: '/'
    }
  },
  block2: {
    title: 'UPCOMING TOURS & DESTINATIONS',
    description: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.',
    cta: {
      label: 'Learn More',
      href: '/'
    }
  },
  section1: {
    mainImage: '/images/section-bg-img.jpg'
  },
  gallery: {
    image1: 'https://source.unsplash.com/pmfJcN7RGiw/w=600',
    image2: 'https://source.unsplash.com/ZlJ6qFInqQE/w=600',
    image3: 'https://source.unsplash.com/Pf6e3o0GL4M/w=600',
    image4: 'https://source.unsplash.com/ZX9s4SA6ePg/w=600',
  }

}


const Home = () => {
  return (
    <>
      <div className='relative'>
        <Navbar className="z-10  md:text-white absolute top-0" />

        {/* Hero block */}
        <div className=''>
          <Img src={`https://source.unsplash.com/Bkci_8qcdvQ`} alt="title image" >
            <div className='absolute inset-0 bg-black opacity-30' />
            <div className='relative md:px-32 py-20 md:py-64 '>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-center text-white'>
                  <h2 className='text-white normal-case text-2xl'>{content.hero.subtitle}</h2>
                  <hr className='border-t-4 border-primary w-16 mx-auto' />
                  <h1 className='uppercase font-montserrat font-bold'>{content.hero.title}</h1>
                  <CTA className='mx-auto mt-10' href={content.hero.cta.href}>{content.hero.cta.label}</CTA>
                </div>
              </div>
            </div>
          </Img>
        </div>
      </div>

      <QuoteBlock author={content.quoteAuthor}>{content.quoteText}</QuoteBlock>

      {/* Cards Section */}
      <section className='container py-10'>
        <Heading>{content.cardsHeader}</Heading>
        <div className='sgrid'>
          {content.cards.map((card, index) => (
            <Card cardContent={card} key={index} />
          ))}
        </div>
      </section>


      {/* Section with background image and Block */}
      <section className='md:my-20'>
        <Img src={content.block1.image} alt="" className="">
          <div className='absolute inset-0 bg-black opacity-50' />
          <div className='relative py-10 md:px-32 md:py-44 '>
            <div className='sgrid gap-0 '>
              <Block blockContent={content.block1} className="text-white" />
            </div>
          </div>
        </Img>
      </section>


      {/* Gallery block */}
      <section className='container my-10 md:my-32 md:pt-20'>
        <div className='sgrid lg:grid-cols-3 place-items-start'>
          <Block blockContent={content.block2} className="md:px-8" />
          <div className='space-y-10 w-full'>
            <Img src={content.gallery.image1} alt="" containerClassName="h-[250px]" className="ring w-full object-cover" />
            <Img src={content.gallery.image2} alt="" containerClassName="h-[350px]" className="w-full h-[400px] object-cover" />
          </div>
          <div className='space-y-10 w-full'>
            <Img src={content.gallery.image3} alt="" containerClassName="h-[350px]" className="w-full object-cover h-[490px]" />
            <Img src={content.gallery.image4} alt="" containerClassName="h-[250px]" className="w-full object-cover h-[200px]" />
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
