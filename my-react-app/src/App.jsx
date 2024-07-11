import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';

import React from "react";

function App() {

  return (
    <div className='bg-stone-950'>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </div>
  );
}

export default App
