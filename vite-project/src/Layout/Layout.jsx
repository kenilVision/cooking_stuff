import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function Layout({children}) {
  return (
      <>      
      <Navbar />
      {children}
      <Footer/>
      </>

  )
}

export default Layout
