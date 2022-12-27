import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import CTA from '@/components/common/CTA';
import Image from 'next/image';

const navItems = {
  links: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Services',
      href: '/services'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ],
  cta: {
    label: 'Take Action',
    href: '/'
  }
}


interface NavbarProps {
  className?: string;
}


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenu.Trigger className="outline-none" asChild>
          <button className="btn btn-square btn-ghost" aria-label="Open navigation menu">
            {isOpen ? <AiOutlineClose className='w-7 h-7' /> : <FiMenu className='w-7 h-7' />}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <div className="p-1 w-screen">
              <div className='py-2 bg-base-100 rounded-sm uppercase'>
                {navItems.links.map((item) => {
                  return (
                    <Link key={item.label} href={item.href} legacyBehavior>
                      <DropdownMenu.Item key={item.label} className='py-2 '>
                        <span className='px-3'>{item.label}</span>
                        <hr className='mt-2' />
                      </DropdownMenu.Item>
                    </Link>
                  );
                })}
                <Link href="/booking" legacyBehavior>
                  <button className='btn btn-primary rounded-xl font-sans ml-3'>Book a class</button>
                </Link>
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );

}



const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className='container'>

        <div className="flex-1">
          <Link href="/" className="">
            <Image alt="logo image" className='' src="/next.svg" width={100} height={50} />
          </Link>
        </div>

        <ul className="hidden md:flex gap-5 font-alegreya">
          {navItems.links.map((item) => {
            return (
              (<Link href={item.href} key={item.label} className=''>
                <li className='list-none m-4 font-sans'>{item.label}</li>
              </Link>)
            );
          })}
          <CTA href={navItems.cta.href} >{navItems.cta.label}</CTA>
        </ul>
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
