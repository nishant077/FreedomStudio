import React from 'react'
import ReactPlayer from 'react-player';

const Utube = () => {
  return (
    <>
    <div className='video flex items-center justify-center m-2  mt-20'>
      <ReactPlayer controls url='https://youtu.be/-ETOSvL3O2Q?si=skZAzl2lUTX32Fva' />
      </div>
    </>
  )
}

export default Utube