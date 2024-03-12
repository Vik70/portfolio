import React from 'react'
import HeroContents from '../sub/HeroContents'

const Hero = () => {
  return (
    <div className='relative flex flex-col  mr-[40px] h-full'>
        <video
        autoPlay
        muted
        loop
        className=' absolute top-[-200] left-0 z-[-1] w-full h-full object-cover'
        >
            <source src='/assets/blackhole.webm' type='video/webm' />
        </video>
        <HeroContents />
    </div>
  )
}

export default Hero