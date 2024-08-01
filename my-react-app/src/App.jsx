import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import ProjectDescription from './components/ProjectDescription';
import Contact from './components/Contact';
import GraphicDesign from './components/GraphicDesign';

import React from "react";


function App() {

  return (
    <div className='bg-gradient-to-b from-black from-40% via-stone-950 via-55% to-[#2e0b2e]'>
      <Sidenav />
      <Main />
      <Work />
      {/* <div className='max-w-[1040px] m-auto md:pl-20'>
        <hr className='h-px my-8 bg-pink-300 border-1 rounded-2xl opacity-75 dark:bg-stone-700'></hr>
      </div> */}
      <ProjectDescription />
      <Projects />
      {/* <div className='max-w-[1040px] m-auto md:pl-20'>
        <hr className='h-px my-8 bg-pink-300 border-1 rounded-2xl opacity-75 dark:bg-stone-700'></hr>
      </div> */}
      <GraphicDesign />
      <Contact />
    </div>
  );
}

export default App
