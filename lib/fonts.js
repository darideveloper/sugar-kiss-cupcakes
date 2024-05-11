import { Roboto, Dancing_Script, Italiana } from 'next/font/google'

export const fontRegular = Roboto({ 
  subsets: ['latin'],
  weight: "300"
})
export const fontTitle = Italiana({
  subsets: ['latin'],
  weight: "400"
}) 
export const fontAlternative = Dancing_Script({
  subsets: ['latin']
})