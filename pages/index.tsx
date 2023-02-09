import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import Carousel from '@/components/Carousel'
import SideBySide from '@/components/sections/SideBySide'

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
  },
  sectionContent: any
}


export default function Home({ navItems, sectionContent }: Props) {



  const images = [
    "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
    "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
    "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
  ];


  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />


      <Navbar navItems={navItems} active="/" />

      {/* <div className="w-[full] md:w-[500px] h-[400px] md:h-[400px] mx-auto pb-24">
        <Carousel images={images} />
      </div> */}
      <div className='h-screen bg-gray-300' />

      <SideBySide content={sectionContent} />

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

  const sectionContent = {
    header: 'Your Instructor',
    body: 'Noi is the main teacher. \nHe has great knowledge of the cuisine to make sure that you’ll go home understanding all the ‘whys’ and ‘why nots’ of Thai cuisine. \nHis English is brilliant, never lacking in humor either!'
  }

  return {
    props: {
      navItems,
      sectionContent
    }
  }
}
