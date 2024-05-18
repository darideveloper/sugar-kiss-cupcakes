import Image from "next/image"
import Link from "next/link"

import { fontTitle } from "@/lib/fonts"

export default function Footer() {

  const phone = "201-906-1316"
  const phoneLink = `tel:+1${phone.replaceAll("-", "")}`
  const email = "sugarkisscupcakes@aol.com"
  const emailLink = `mailto:${email}`
  
  const socials = [
    {
      "name": "facebook",
      "link": "https://www.facebook.com/SugarKissNadine/",
    },
    {
      "name": "venmo",
      "link": "https://venmo.com/u/Sugar-kiss",
    },
    {
      "name": "phone",
      "link": phoneLink,
    },
    {
      "name": "email",
      "link": emailLink,
    }
  ]

  const links = [
    {
      "text": phone,
      "link": phoneLink,
      "is_external": true
    },
    {
      "text": email,
      "link": emailLink,
      "is_external": true
    },
    {
      "text": "Our Policy",
      "link": "/policy",
      "is_external": false
    },
    {
      "text": "Ridgefield, NJ 07657",
      "link": "#",
      "is_external": false
    }
  ]

  return (
    <footer
      id="footer"
      className={`
        footer
        w-full
        bg-pink-dark
        mt-10
        py-4
        flex
        flex-col md:flex-row
        justify-center md:justify-evenly
        items-center
      `}
    >
      <address
        className={`
          text-white
          font-bold
          flex
          flex-col md:flex-row
          justify-center
          items-center
        `}
      >
        <Image
          src="/images/logo-small.webp"
          alt="Sugar Kisses logo"
          width={100}
          height={100}
          className={`
            logo
            opacity-70
          `}
        />
        <div 
          className={`
            texts
            flex
            flex-col
            justify-center
            items-center md:items-start
            md:ml-4
          `}
        >

          <p
            className={`
              text-2xl
              ${fontTitle.className}
              mb-2
            `}
          >
            Sugar Kiss Cupcakes
          </p>

          {
            links.map((link) => (
              <a 
                key={link.text}
                href={link.link}
                className={`
                  link
                  py-1
                  duration-300
                  text-sm
                  hover:scale-110
                  hover:opacity-70
                `}
                target={link.is_external ? "_blank" : ""}
              >
                {link.text}
              </a>
            ))
          }

        </div>
      </address>

      <div 
        className={`
          socials
          flex
          justify-center
          items-center
          mt-4
        `}
      >
        {
          socials.map((social) => (
            <a 
              key={social.name}
              href={social.link}
              className={`
                social
                text-white
                p-2
                m-1
                duration-300
                hover:scale-110
                hover:opacity-70
              `}
              target="_blank"
            >
              <Image 
                src={`/images/socials/${social.name}.webp`}
                alt={`Sugar Kisses ${social.name}`}
                width={50}
                height={50}
                className={`
                  social-icon
                  w-10
                `}
              />              
            </a>
          ))
        }
        
      </div>
    </footer>
  )
}