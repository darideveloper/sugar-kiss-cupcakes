import { facebookLink } from '@/lib/contact'
import Image from 'next/image'

export default function FixedButton({}) {
  return (
    <a 
      href="facebookLink"
      target="_blank"
      className={`
        fixed-button
        fixed
        z-20
        bottom-5 md:bottom-10
        right-5 md:right-10
        p-2
        bg-pink-dark
        rounded-full
        duration-300
        hover:scale-110
        shadow-md hover:shadow-lg
        animate-pulse hover:animate-none
      `}
    >
      <Image
        src="/images/socials/facebook.webp"
        alt="Facebook"
        width={50}
        height={50}
        className={`
          social-icon
          w-10
        `}
      />
    </a>
  )
}