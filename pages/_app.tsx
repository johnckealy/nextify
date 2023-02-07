import type { AppProps } from 'next/app'
import { fontPrimary, fontSecondary } from '@/components/fonts'
import { DefaultSeo } from 'next-seo';
import SEO from '@/components/Seo';
import Head from 'next/head'
import '@/styles/globals.css'
// import GoogleAnalytics from '@/components/GoogleAnalytics'; //This needs testing before use


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <main className={`${fontPrimary.variable} ${fontSecondary.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
