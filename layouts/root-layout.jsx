import PropTypes from 'prop-types'
import AOS from 'aos'
import Head from 'next/head'
import Header from '@/sections/header'
import Footer from '@/sections/footer'

import 'aos/dist/aos.css'

import { fontRegular } from '@/lib/fonts'
import { metaData } from '@/lib/meta'
import { useEffect } from 'react'


export default function RootLayout({ children, pageTitle }) {
  
  // Load AOS
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        {
          pageTitle
          ?
          <title>{pageTitle} | {metaData.title}</title>
          :
          <title>{metaData.title}</title>
        }
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta name="keywords" content={metaData.keywords} />      
      </Head>
      <div className="mx-auto">
        <Header />
        <main 
          className={`
            ${fontRegular.className}
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}


RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string
}