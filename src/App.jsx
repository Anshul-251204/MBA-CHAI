import React from 'react'
import './App.scss'
import Intro from './components/Intro'
import Section from './components/Section'
import freshimg from './assets/academy.png'
import freshimg2 from './assets/story.png'
import tedtalksimg from './assets/in-the-news.gif'
import franchiseimg from './assets/franchise.gif'
import mapp from './assets/locations.png'
import courseimg from './assets/image2.png'
import albumimg from './assets/mba-cares.gif'
import bharatimg from './assets/image1.png'
import chaiimg from './assets/image3.png'

import data from './data/data.json'
import Footer from './components/Footer.jsx'
import './components/style/mediaqurry.scss'
import Nav from './components/nav'

const {freshTopic, freshTopic2,tedTalks,franchise, map, courses, album, barat,chaiwala} = data;




const $yellow = "#fff100";
const $pink = "#ed1e79";
const $red = "#d20120";
const $brown = "#6d3d0f";



function App() {
 
  return (
    <>

      <Nav/>
      <Intro />

      <Section
      h3={freshTopic.heading}
      p={freshTopic.text}
      btntext={freshTopic.btn}
      imgscr={freshimg} 
      headingColor = {$yellow}
      pColor = {$yellow}
      bgColor ={$pink}
      btnColor = {$pink}
      btnBgColor = {$yellow}
      />

<Section
      h3={tedTalks.heading}
      p={tedTalks.text}
      btntext={tedTalks.btn}
      imgscr={freshimg2} 
      headingColor = {$yellow}
      pColor = {$yellow}
      bgColor ={$pink}
      btnColor = {$pink}
      btnBgColor = {$yellow}
      />
{/* redtals */}
<Section
      h3={franchise.heading}
      p={franchise.text}
      btntext={franchise.btn}
      imgscr={tedtalksimg} 
      headingColor = {$pink}
      pColor = {$pink}
      bgColor ={$yellow}
      btnColor = {$yellow}
      btnBgColor = {$pink}
      />

<Section
      h3={freshTopic2.heading}
      p={freshTopic2.text}
      btntext={freshTopic2.btn}
      imgscr={franchiseimg} 
      headingColor = {$pink}
      pColor = {$pink}
      bgColor ={$yellow}
      btnColor = {$yellow}
      btnBgColor = {$pink}
      />


<Section
      h3={map.heading}
      p={map.text}
      btntext={map.btn}
      imgscr={mapp} 
      headingColor = {$yellow}
      pColor = {$yellow}
      bgColor ={$pink}
      btnColor = {$pink}
      btnBgColor = {$yellow}
      hasbutton={false}
      />

<Section
      h3={courses.heading}
      p={courses.text}
      btntext={courses.btn}
      imgscr={courseimg} 
      headingColor = {$pink}
      pColor = {$pink}
      bgColor ={$yellow}
      btnColor = {$yellow}
      btnBgColor = {$pink}
      imgwidth = {"15%"}
      // hasbutton={false}
      />


<Section
      h3={album.heading}
      p={album.text}
      btntext={album.btn}
      imgscr={albumimg} 
      headingColor = {$yellow}
      pColor = {$yellow}
      bgColor ={$pink}
      btnColor = {$pink}
      btnBgColor = {$yellow}
     
      />

<Section
      h3={barat.heading}
      p={barat.text}
      btntext={barat.btn}
      imgscr={bharatimg} 
      headingColor = {$yellow}
      pColor = {$yellow}
      bgColor ={$pink}
      btnColor = {$pink}
      btnBgColor = {$yellow}
     
      />

<Section
      h3={chaiwala.heading}
      p={chaiwala.text}
      btntext={chaiwala.btn}
      imgscr={chaiimg} 
      headingColor = {$pink}
      pColor = {$pink}
      bgColor ={"#fff"}
      btnColor = {$pink}
      btnBgColor = {$pink}
      hasbutton={false}
     
      />

      <Footer/>

     
    </>
  )
}

export default App
