import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import Carousel from '@/components/Carousel'
import SideBySide from '@/components/sections/SideBySide'
import { getGlobalContent } from '@/.tina/tinaHelpers'
import { client } from '@/.tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'

interface Props {
  globalContent: any,
  sectionContent: any
}


export default function Home({ globalContent, sectionContent }: Props) {


  const { data } = useTina({
    query: sectionContent.query,
    variables: sectionContent.variables,
    data: sectionContent.data,
  })

  return (
    <>

      <NextSeo title="Change me I'm the home page!" description="" />


      <Navbar navItems={globalContent.data.global.navbar} active="/" />

      {/* <div className="w-[full] md:w-[500px] h-[400px] md:h-[400px] mx-auto pb-24">
        <Carousel images={images} />
      </div> */}

      <SideBySide content={data.sections.sideBySideSection} />
      <div className='h-screen bg-gray-300' />
    </>
  )
}






export const getStaticProps = async () => {

  const globalContent = await getGlobalContent()


  const sectionQuery = await client.queries.sections({ relativePath: 'section-sbs.mdx' })
  const sectionContent =  {
    data: sectionQuery.data,
    query: sectionQuery.query,
    variables: sectionQuery.variables,
  }


  return {
    props: {
      globalContent,
      sectionContent
    }
  }
}
