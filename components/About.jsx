import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'


const About = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[4px] ml-[25px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] ml-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px] mr-[20px]'>About</h1>
                
            </motion.div>
            </div>
        
    </motion.div>
  )
}

export default About