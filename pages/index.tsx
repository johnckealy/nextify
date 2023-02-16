import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Navbar from '@/components/navbars/StickyNavbar'
import Carousel from '@/components/Carousel'
import SideBySide from '@/components/sections/SideBySide'
import { getGlobalContent } from '@/.tina/tinaHelpers'
import { client } from '@/.tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import Img from '@/components/Img'

interface Props {
  globalContent: any,
  sectionContent?: any,
  carouselContent?: any,
  homepageContent?: any
}

interface Section {
  section: TinaMarkdownContent
}


interface Props {
  content: {
    header: string,
    subheader?: string,
    body: TinaMarkdownContent
  }
}


const TestComp = ({inputColor}) => {
  return (
    <div className='bg-red-500 h-20 w-20'>
      {inputColor}
    </div>
  )
}

const SomthingComp = () => {
  return (
    <div className='bg-red-500 h-20 w-20'>
      Seomtjhing
    </div>
  )
}



export default function Home({ homepageContent, globalContent }: Props) {

  const { data } = useTina({
    query: homepageContent.query,
    variables: homepageContent.variables,
    data: homepageContent.data,
  })

  // debugger

  return (
    <>
      <NextSeo title="Change me I'm the home page!" description="" />

      <Navbar navItems={globalContent.data.global.navbar} active="/" />


      {data.pages.sections.map((section: Section, index: number) => {
        return <TinaMarkdown
          key={index}
          components={{ SideBySide, Carousel }}
          content={section.section} />
      })}



    </>
  )
}






export const getStaticProps = async () => {


  const globalContent = await getGlobalContent()

  const homepageQuery = await client.queries.pages({ relativePath: "home.mdx" })
  const homepageContent = {
    data: homepageQuery.data,
    query: homepageQuery.query,
    variables: homepageQuery.variables,
  }


  return {
    props: {
      globalContent,
      homepageContent,
    }
  }
}
