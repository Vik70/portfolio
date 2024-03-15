"use client"

import Image from "next/image";
// import Hero from "@/components/main/Hero";
import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '../components'
import HeroContents from '../components/sub/HeroContents'


export default function Home() {
  return (

        <div className="flex flex-col gap-20">
            <div className='flex flex-col h-[850px] gap-20'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />

            <div className="relative z-0">
            <Contact/>
            <StarsCanvas />

            </div>

        </div>

  );
}
