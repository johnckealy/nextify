import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import Carousel from '@/components/Carousel'


interface Props {
  navItems: {
    cta: {
      label: string
      href: string
    }
    links: {
      label: string
      href: string
    }[]
  }
}


export default function Home({ navItems }: Props) {



  const images = [
    "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
    "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
    "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
  ];


  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />


      <Navbar navItems={navItems} active="/" />

      <Carousel images={images} />

      <div className='h-screen bg-gray-300' />
      <div className='h-screen bg-gray-300' />
    </>
  )
}




export async function getStaticProps() {
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

  return {
    props: {
      navItems
    }
  }
}
