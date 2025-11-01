import React from 'react'
import Nav from './Nav'
import Blog from './Blog'
import Slider from "./Slider"
import Videobox from './Videobox'
import Services from './Services'
import Location from './Location'
import Footer from './Footer'
import Features from './Features'
import ContactUs from './ContactUs'

function Home() {
  return (
    <div>
        <Nav />
        <Slider />
        <Blog />
        <Videobox />
        <Features />
        <Services />
        <Location />
        <ContactUs/>
        <Footer />
    </div>
  )
}

export default Home