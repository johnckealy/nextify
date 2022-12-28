import Img from '@/components/Img';
import Navbar from '@/components/Navbar'
import Footer from '@/components/themes/OutdoorAdventure/Footer';
import ContactForm from '@/components/common/ContactForm';
import Socials from '@/components/common/Socials';

const content = {
  hero: {
    image: 'https://source.unsplash.com/Yh6K2eTr_FY/1400x600',
    title: "Contact Us",
  },
  contactForm: {
    title: "We're ready, let's talk.",
    cta: {
      label: "Send Message",
      href: "https://formspasdf.com"
    }
  },
  contactInfo: {
    title: "Contact Info",
    address: "1234 Street Name, City Name, United States",
    email: "contact@example.com",
    phone: "800-123-456",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/"
  }
}


const Contact = () => {
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

      <section className='container my-10 md:my-20'>
        <div className="sgrid">
          <div>
            <h2 className='md:my-10'>{content.contactForm.title}</h2>
            <ContactForm cta={content.contactForm.cta} ctaClassName="rounded-full px-10" />
          </div>
          <div>
            <h2 className='md:my-10'>{content.contactInfo.title}</h2>
            <div>
              <h4>Address</h4>
              <p>{content.contactInfo.address}</p>
            </div>
            <div>
              <h4>Email Us</h4>
              <p>{content.contactInfo.email}</p>
            </div>
            <div>
              <h4>Call Us</h4>
              <p>{content.contactInfo.phone}</p>
            </div>
            <div>
              <h4>Follow Us</h4>
              <Socials socials={content.socials} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
