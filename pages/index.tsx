import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import { FaChevronDown } from "react-icons/fa"
import Link from 'next/link'
import { Gallery3Images } from '@/components/themes/BaseThemeTemplates/Gallery'
import Navbar from '@/components/navbars/StickyNavbar'


const navItems = {
  cta: {
    label: 'Take Action',
    href: '/'
  },
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
  ]
}


const ChevronDownScroll = () => {
  return (
    <div className=" bg-white flex justify-center items-center mx-auto">
      <div className='bg-white rounded-[50%] px-24 py-8 -translate-y-12'>
        <Link href="/#hero-image">
          <FaChevronDown className="w-12 h-12" />
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />

      <Navbar navItems={navItems} />

      <ParallaxHero />

      {/* <ChevronDownScroll /> */}

      {/* <Gallery3Images  /> */}

      <div className='h-screen bg-gray-300'/>
    </>
  )
}
