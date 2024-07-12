import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';

import React from "react";

function App() {

  return (
    <div className='bg-gradient-to-b from-black from-40% via-stone-950 via-65% to-[#2e0b2e]'>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </div>
  );
}

export default App
