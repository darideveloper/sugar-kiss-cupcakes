import AOS from 'aos'
import Head from 'next/head'
import 'aos/dist/aos.css'
import { fontRegular } from '@/lib/fonts'
import { metaData } from '@/lib/meta'
import { useEffect } from 'react'


export default function RootLayout({ children }) {
  
  // Load AOS
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta name="keywords" content={metaData.keywords} />      
      </Head>
      <div className="mx-auto">
        <header>
        </header>
        <main 
          className={`
            ${fontRegular.className}
          `}
        >
          {children}
        </main>
        <footer>
        </footer> 
      </div>
    </>
  )
}
