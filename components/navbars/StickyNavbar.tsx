
import Link from 'next/link';
import { useCycle } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { motion, Variants } from 'framer-motion';
import Img from 'components/Img';
import CTA from 'components/CTA';

interface Props {
  navItems: any;
}

interface MobileProps {
  navItems: any;
  toggleOpen: () => void;
  isOpen: boolean;
}


const containerVariants: Variants = {
  hidden: {
    height: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    }
  },
  show: {
    height: 'auto',
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.1,
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    }
  },
}


const Logo = ({ logoWidth }: {logoWidth: String}) => {
  return (
    <Link href="/" className={`h-full w-${logoWidth} mr-auto`}>
      <Img src="/logo.svg" alt="Company Logo" className="" containerClassName="" priority />
    </Link>
  )
}



const MobileNavbar = ({ navItems, isOpen, toggleOpen }: MobileProps) => {
  return (
    <div className='md:hidden w-full'>
      <div className={`h-full flex p-4 bg-white ${isOpen ? '' : ''}`} onClick={toggleOpen}>
        <Logo logoWidth="24" />
        {isOpen ?
          <GrClose className='navbtn' /> :
          <FiMenu className='navbtn' />}
      </div>

      <motion.ul
        variants={containerVariants}
        className={`bg-primary flex flex-col ${isOpen ? '' : ''} text-2xl text-center`}
        animate={`${isOpen ? 'show' : 'hidden'}`}
        initial="hidden">
        <div className='py-10'>
          {navItems.links.map((link: any) => (
            <Link key={link.href} href={link.href}>
              <motion.li key={link.href} className='my-6 text-darkgrey pb-2' variants={menuItemVariants}>
                <span className='border-[#a9a0a0] pb-3 border-b-[1px]'>{link.label}</span>
              </motion.li>
            </Link>
          ))}
        </div>

      </motion.ul>
    </div>
  );
};


const DesktopNavbar = ({ navItems }: Props) => {
  return (
    <div className='hidden w-full h-auto md:flex md:justify-end md:items-center'>
      <Logo logoWidth="32" />
      <ul className='flex gap-8 mx-10 items-center'>
        {navItems.links.map((link: any) => {
          return (
            <Link href='/'>
              <li key={link.href} className='p-2 rounded-lg hover:bg-offwhite'>
                <span className=''>{link.label}</span>
              </li>
            </Link>
          )
        })}
      </ul>

      <div className='flex items-center'>
        <CTA href="/">
          {navItems.cta.label}
        </CTA>
      </div>
    </div>
  );
};


const StickyNavbar = ({ navItems }: Props) => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="sticky top-0 flex justify-between p-6 h-auto">
      <MobileNavbar navItems={navItems} isOpen={isOpen} toggleOpen={toggleOpen} />
      <DesktopNavbar navItems={navItems} />
    </nav>
  );
}

export default StickyNavbar;
