import React from 'react'
import './App.css'
import DynamicPage from './components/DynamicPage'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Utube from './components/Utube'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Marquee from './components/Marquee'


function App() {

  return (
    <>
      <NavigationBar />
      <DynamicPage />
       <Section2/>
       <div className="-mt-36  mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden bg-black">
      <Marquee />
    </div>
       <Section3/>
       
       <Utube/>
       <Footer/>
     
    </>
  )
}

export default App
