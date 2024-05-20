import Link from 'next/link'
import Image from 'next/image'
import { fontTitle } from '@/lib/fonts'
import { useState } from 'react'
import { usePathname } from 'next/navigation'


export default function Header ({}) {

  const [menuOpen, setMenuOpen] = useState(false)
  const pathName = usePathname()
  console.log(pathName)
  
  const links = [
    {
      "text": "Order now",
      "link": "/order"
    },
    {
      "text": "Prices",
      "link": "/#prices"
    },
    {
      "text": "Flavors",
      "link": "/#flavors"
    },
    {
      "text": "About us",
      "link": "/#about"
    },
    {
      "text": "Contact us",
      "link": "#footer"
    },
  ]
  
  return (
    <header
      className={`
        container
        mx-auto
        mb-12
      `}
    >
      <Link
        href="/"
      >
        <Image 
          src="/images/character.webp"
          width={80}
          height={80}
          alt="Sugar Kiss Cupcakes logo"
          className={`
            mx-auto
          `}
        />
      </Link>

      <nav
        className={`
          overflow-hidden
        `}
      >
        <ul
          className={`
            flex
            flex-col md:flex-row
            justify-center
            items-center
            gap-2
            py-4
            duration-700
            ${!menuOpen ? '-mt-56' : ''}
            md:-mt-0
            
          `}
        >
          {
            links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className={`
                    ${fontTitle.className}
                    text-xl
                    px-8
                    duration-300
                    hover:text-golden
                    ${pathName == link.link && 'opacity-50'}
                    ${pathName == link.link && 'pointer-events-none'}
                  `}
                >
                  {link.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <button
        className={`
          py-4
          mx-auto
          w-full
          flex
          justify-center
          items-center
          md:hidden
        `}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className= {`
            fill-pink-dark
            w-8
            duration-300
            ${menuOpen ? 'transform rotate-180' : ''}
          `}
        >
            <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/>
        </svg>
      </button>
    </header>
  )
}