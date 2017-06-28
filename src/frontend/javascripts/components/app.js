import React from 'react';

import Name from './util/name';
import Contact from './contact/index'
import About from './about/index';
import Projects from './projects/index'
import Skills from './skills/index'

const App = () => (
  <div>
    <Name />
    <div className='grid'>
      <About />
      <Projects />
      <Contact />
      <Skills />
    </div>
  </div>
);

export default App;
