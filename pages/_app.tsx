import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { notosans, montserrat } from '@/components/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable}  ${notosans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
