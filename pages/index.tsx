import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import ChevronDownScroller from '@/components/scrollers/ChevronDownScroller'



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
  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />

      <Navbar navItems={navItems} />

      <h3>Hello</h3>

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
