import React from 'react'

import './App.css'
import MainPage from './components/MainPage'
import Nav from './components/Nav'

import Utube from './components/Utube'
import Footer from './components/Footer'
import Section2 from './components/Section2'
import SectionPart from './components/SectionPart'
import ImageSlider from './components/ImageSlider'


function App() {


  return (
    <>
     <Nav/>
     <MainPage/>
     <Section2/>
     <SectionPart/>
  <ImageSlider/>
     <Utube/>
     <Footer/>
    
    </>
  )
}

export default App
