import Image from "next/image"

import { fontTitle } from "@/lib/fonts"
import { socials, phone, phoneLink, email, emailLink } from "@/lib/contact"

export default function Footer() {

  const links = [
    {
      "text": phone,
      "link": phoneLink,
      "isExternal": true
    },
    {
      "text": email,
      "link": emailLink,
      "isExternal": true
    },
    {
      "text": "Our Policy",
      "link": "/policy",
      "isExternal": false
    },
    {
      "text": "Ridgefield, NJ 07657",
      "link": "#footer",
      "isExternal": false
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
      `}
    >
      <div 
        className={`
          content
          w-full
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
            src="/images/character.webp"
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
                  target={link.isExternal ? "_blank" : ""}
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
            socials.map((social, index) => (
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
      </div>

      <small
        className={`
          text-white
          text-center
          w-full
          mt-4
          flex
          flex-col xs:flex-row
          justify-center
          items-center
          gap-2 xs:gap-8
        `}
      >
        &copy; {new Date().getFullYear()} Sugar Kiss Cupcakes. All rights reserved.
        <br />
        <a 
          href="https://api.whatsapp.com/send?phone=5214493402622"
        >
          Powered by <strong>Dari Developer</strong>
        </a>
      </small>
    </footer>
  )
}