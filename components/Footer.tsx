import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaTripadvisor } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'



interface FooterContent {
  footerContent: {
    email: string,
    googleMapsLink: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    tripadvisorLink: string,
    facebookLink: string,
    instagramLink: string,
    youtubeLink: string,
    phone: string,
  }
}

const Footer = ({ footerContent }: FooterContent) => {
  return (
    <footer className="p-10 md:p-20 bg-neutral text-neutral-content">
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 place-items-center'>
        <div >
          <div className='font-nunito font-bold py-3'>Time for Lime</div>
          <div className='font-nunito space-y-2'>
            <div className='my-3'>
              <p className='m-0'> {footerContent.addressLine1}</p>
              <p className='m-0'> {footerContent.addressLine2}</p>
              <p className='m-0'> {footerContent.addressLine3}</p>
            </div>
            <a href={footerContent.googleMapsLink} target="_blank" rel="noreferrer" className='hover:underline'>
              <span className='flex items-center gap-2'><BiMap className='w-6 h-6' />Click here for location</span>
            </a>
          </div>
        </div>
        <div className=' space-y-10	'>
          <div>
            <div className="footer-title">Social</div>
            <div className="grid grid-flow-col place-content-center gap-7">
              <a rel="noreferrer" target="_blank" href={footerContent.facebookLink} aria-label="social link to facebook"><FaFacebookF className='transition scale-100 hover:scale-110 w-8 h-8' /></a>
              <a rel="noreferrer" target="_blank" href={footerContent.instagramLink} aria-label="social link to instagram"><AiFillInstagram className='transition scale-100 hover:scale-110 w-8 h-8' /> </a>
              <a rel="noreferrer" target="_blank" href={footerContent.youtubeLink} aria-label="social link to youtube"><BsYoutube className='transition scale-100 hover:scale-110 w-8 h-8' /> </a>
              <a rel="noreferrer" target="_blank" href={footerContent.tripadvisorLink} aria-label="social link to trip advisor"><FaTripadvisor className='transition scale-100 hover:scale-110 w-8 h-8' /> </a>
            </div>
          </div>
          <div>
            <span className='font-nunito mb-3 flex items-center gap-3'><BsWhatsapp className='w-5 h-5' />{footerContent.phone}</span>
            <span className='font-nunito flex items-center gap-3'><MdOutlineEmail className='w-5 h-5' />{footerContent.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
