import {React} from 'react'
import imagelogo from '../assets/freedomLogo.PNG'



const NavigationBar = () => {


  


 


  return (
    <>
    <div  className='navbar'>
    <div className='logo flex items-center justify-center mt-6'>
     <img  src={imagelogo} alt='logo'/>
    </div>
    <div  className='Navbar flex justify-center gap-12 mt-3 font-normal cursor-pointer  font-sans text-sm'>
        <h3 className='opacity-40 hover:opacity-80'>HOME</h3>
        <h3 className='opacity-40 hover:opacity-80'>ABOUT</h3>
        <h3 className='opacity-40 hover:opacity-80'>INITIATIVES</h3>
        <h3 className='opacity-40 hover:opacity-80'>MOVEMENTS</h3>
        <h3 className='opacity-40 hover:opacity-80'>PROGRAMS</h3>
        <h3 className='opacity-40 hover:opacity-80'>CONNECT</h3>
        <h3 className='opacity-40 hover:opacity-80'>MAP</h3>
    </div>
    </div>
    
    </>
  )
}

export default NavigationBar