import { Lora, Poppins } from '@next/font/google'


const fontPrimary = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
})

const fontSecondary = Lora({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--secondary-font',
})

export { fontPrimary, fontSecondary };
