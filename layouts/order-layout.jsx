import PropTypes from 'prop-types'
import AOS from 'aos'
import Head from 'next/head'
import Header from '@/sections/header'
import Footer from '@/sections/footer'
import OrderProgress from '@/sections/order-progress'
import MainText from '@/components/main-text'

import 'aos/dist/aos.css'

import { fontRegular, fontTitle } from '@/lib/fonts'
import { metaData } from '@/lib/meta'
import { useEffect } from 'react'

import { OrderContextProvider } from '@/contexts/order-context'

export default function OrderLayout({ children, pageTitle, mainText, subText }) {
  
  // Load AOS
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <OrderContextProvider>
      <Head>
        {
          pageTitle
          ?
          <title>{`${pageTitle} | ${metaData.title}`}</title>
          :
          <title>{metaData.title}</title>
        }
        <meta name="description" content="Order cupcakes, dessert parfait cups and cakes from Sugar Kiss Cupcakes. We bake scratch made cupcakes, desserts & cakes with all natural ingredients. We are a private baker to some celebrities & we always strive to create the most delicious desserts. NJ Cottage Bakers Food License. 🧁NJ certification (State Board of Health). 🧁Manager Food Handlers Certificate. 🧁100% fully insured company" />
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
          <MainText>
            {mainText}
          </MainText>

          <p
            className={`
              text-center
              ${fontTitle.className}
              text-2xl
              text-golden
              w-11/12
              mx-auto   
            `}
          >
            {subText}
          </p>

          <OrderProgress />
          {children}
        </main>
        <Footer />
      </div>
    </OrderContextProvider>
  )
}


OrderLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
}