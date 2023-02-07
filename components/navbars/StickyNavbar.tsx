
import Link from 'next/link';
import { useCycle } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';

interface Props {
  navItems: any;
}

const StickyNavbar = ({ navItems }: Props) => {

  const [isOpen, toggleOpen] = useCycle(false, true);


  return (
    <nav className="sticky top-0 bg-red-300">

      <GiHamburgerMenu />


      {navItems.links.map((link: any) => (
        <Link href={link.href}>
          <span className="">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default StickyNavbar;
