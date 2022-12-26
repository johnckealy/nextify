import { Montserrat, Noto_Sans } from '@next/font/google'


const notosans = Noto_Sans({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-notosans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-montserrat',
})

export { notosans, montserrat };
