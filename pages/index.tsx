import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import Carousel from '@/components/Carousel'
import SideBySide from '@/components/sections/SideBySide'
import { getGlobalContent } from '@/.tina/tinaHelpers'


interface Props {
  globalContent: any
}


export default function Home({ globalContent }: Props) {

  const images = [
    "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
    "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
    "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
  ];

  console.log(globalContent)

  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />


      <Navbar navItems={globalContent.data.global.navbar} active="/" />

      {/* <div className="w-[full] md:w-[500px] h-[400px] md:h-[400px] mx-auto pb-24">
        <Carousel images={images} />
      </div> */}
      <div className='h-screen bg-gray-300' />

      {/* <SideBySide content={sectionContent} /> */}

      <div className='h-screen bg-gray-300' />
    </>
  )
}






export const getStaticProps = async () => {

  const globalContent = await getGlobalContent()

  return {
    props: {
      globalContent,
    }
  }
}
