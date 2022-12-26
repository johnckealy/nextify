import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import CTA from '@/components/common/CTA';
import Image from 'next/image';

const navItems = [
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
    href: '/projects'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]


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
                {navItems.map((item) => {
                  return (
                    <Link key={item.label} href={item.href}>
                      <DropdownMenu.Item key={item.label} className='py-2 '>
                        <span className='px-3'>{item.label}</span>
                        <hr className='mt-2' />
                      </DropdownMenu.Item>
                    </Link>
                  )
                })}
                <Link href="/booking">
                  <button className='btn btn-primary rounded-xl font-sans ml-3'>Book a class</button>
                </Link>
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )

}



const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={`navbar bg-white ${className}`}>
      <div className='container'>

        <div className="flex-1">
          <Link href="/">
            <a className="">
              <Image alt="logo image" className='w-auto' src="/logo.png" width={100} height={50} />
            </a>
          </Link>
        </div>

        <ul className="hidden md:flex gap-5 font-alegreya">
          {navItems.map((item) => {
            return (
              <Link href={item.href} key={item.label} >
                <a className=''>
                  <li className='list-none m-4 font-sans'>{item.label}</li>
                </a>
              </Link>
            )
          })}
          <CTA className="rounded-full px-8" href="/booking" >Take Action</CTA>
        </ul>
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
