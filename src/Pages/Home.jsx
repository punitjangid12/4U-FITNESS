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
       <Nav/>
<section id="slider"><Slider /></section>
<section id="services"><Services /></section>
<section id="video"><Videobox/></section>
<section id="blog"><Blog /></section>
<section id="features"><Features /></section>
<section id="location"><Location /></section>
<section id="contactus"><ContactUs /></section>
      <Footer />
    </div>
  )
}

export default Home