import { NextSeo } from 'next-seo'
import ParallaxHero from '@/components/themes/BaseThemeTemplates/ParallaxHero'
import Carousel from '@/components/Carousel'
import SideBySide from '@/components/sections/SideBySide'
import { getTinaContent } from '@/.tina/tinaHelpers'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import Layout from '@/components/Layout'


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


export default function Home({ homepageContent, globalContent }: Props) {

  const { data } = useTina({
    query: homepageContent.query,
    variables: homepageContent.variables,
    data: homepageContent.data,
  })

  return (
    <>
      <NextSeo title="Change me I'm the home page!" description="" />

      <Layout globalContent={globalContent} >
        {data.pages.sections.map((section: Section, index: number) => (
          <TinaMarkdown
            key={index}
            components={{ SideBySide, Carousel }}
            content={section.section} />
        ))}
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {

  const globalContent = await getTinaContent('global', 'global.json')
  const homepageContent = await getTinaContent('pages', 'home.mdx')

  return {
    props: {
      globalContent,
      homepageContent,
    }
  }
}
