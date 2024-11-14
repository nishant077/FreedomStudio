import React from 'react'
import './App.css'
import DynamicPage from './components/DynamicPage'
import NavigationBar from './components/NavigationBar'
import ContentImage from './components/ContentImage'
import Footer from './components/Footer'
import Utube from './components/Utube'

import ScrollBar from './components/ScrollBar'
import SwipeBar from './components/SwipeBar'



function App() {

  return (
    <>
      <NavigationBar />
      <DynamicPage />
      <ScrollBar/>
      <ContentImage/>
       <SwipeBar />
      <Utube/>
      <Footer/>
     
    </>
  )
}

export default App
