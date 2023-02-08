import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import CTA from '@/components/CTA';
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
      <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)} modal={false}>
        <DropdownMenu.Trigger className="outline-none" asChild>
          <button className="btn btn-square btn-primary" aria-label="Open navigation menu">
            {isOpen ? <AiOutlineClose className='w-7 h-7' /> : <FiMenu className='w-7 h-7' />}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal >
          <DropdownMenu.Content asChild className='bg-pink-400'>
            <div className="w-screen">
              <div className='pt-10 py-2 bg-base-100 rounded-sm shadow-2xl'>
                {navItems.links.map((item) => {
                  return (
                    <Link key={item.label} href={item.href}>
                      <DropdownMenu.Item key={item.label} className='py-2 hover:bg-gray-200 outline-none'>
                        <span className='px-3'>{item.label}</span>
                        <hr className='mt-2' />
                      </DropdownMenu.Item>
                    </Link>
                  );
                })}
                <CTA className='m-3' href={navItems.cta.href} >{navItems.cta.label}</CTA>

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
        <div className="flex items-center justify-between w-full">
          <Link className='' href="/">
            <Image alt="logo image" src="/next.svg" className='' width={100} height={50} />
          </Link>

          <div className=''>
            <ul className="hidden md:flex gap-5">
              {navItems.links.map((item) => {
                return (
                  (<Link href={item.href} key={item.label} className=''>
                    <li className='list-none m-4'>{item.label}</li>
                  </Link>)
                );
              })}
              <CTA href={navItems.cta.href} >{navItems.cta.label}</CTA>
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}

export default Navbar;
