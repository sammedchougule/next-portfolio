import React from 'react'
import { Spotlight } from './ui/Spotlight'

function Hero() {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32
            md:-top-20 h-screen" 
            fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" 
            fill='purple'/>
            <Spotlight className="-top-20 left-80 h-[80vh] w-[50vw]" 
            fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:maz-w-2xl lg:max-w-[60vw] flex felx-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic With Next.js</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero