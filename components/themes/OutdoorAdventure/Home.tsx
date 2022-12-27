import Img from '@/components/Img'
import CTA from '@/components/common/CTA'
import Navbar from '@/components/Navbar'


const content = {
  quoteText: '"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris"',
  quoteAuthor: 'Jim Farrey',
  cards: [
    {
      imageSrc: '/images/hero-bg.jpg',
      title: 'Everest Camp Trek',
      body: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.',
      cta: {
        label: 'Learn More',
        href: '/'
      }
    },
    {
      imageSrc: '/images/hero-bg.jpg',
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
      <Navbar className="z-10 bg-opacity-0 md:text-white" />


      <Img src={`https://source.unsplash.com/Bkci_8qcdvQ`} alt="image" className="">
        <div className='absolute inset-0 bg-black opacity-30' />
        <div className='relative p-32'>
          <div className='flex flex-col justify-center items-center'>
            <div>
              <h1 className='text-7xl font-montserrat font-bold text-white'>Hello am I inter?</h1>
              <h2 className='text-white'>Some kind of subtitle</h2>
              <CTA href='/'>Get started</CTA>
            </div>
          </div>
        </div>
      </Img>
    </>
  );
}

export default Home;
