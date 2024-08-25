import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import ProjectDescription from './components/ProjectDescription';
import Contact from './components/Contact';
import GraphicDesign from './components/GraphicDesign';
import imgUrl from './assets/Untitled-2.png'

import React from "react";

import "tailwindcss/tailwind.css"


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <div className='w-full h-full object-cover bg-[url("../assets/Untitled-3.png")]'>
      {/* <div 
          className={`justify-center w-full h-screen bg-no-repeat bg-cover bg-center rounded-lg`} 
          style={{ backgroundImage: `url(${bgImage})`}} > */}
      <Work />
      <ProjectDescription />
      <Projects />
      <GraphicDesign />
      <Contact />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App

      {/* <div className='max-w-[1040px] m-auto md:pl-20'>
        <hr className='h-px my-8 bg-pink-300 border-1 rounded-2xl opacity-75 dark:bg-stone-700'></hr>
      </div> */}