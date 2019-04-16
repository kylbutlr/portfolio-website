import React, { Fragment } from 'react';
import Welcome from './Welcome';
import Biography from './Biography';
import Projects from './Projects';
import Contact from './Contact';
import SmallDevice from './SmallDevice';

export default function Body() {
  return (
    <Fragment>
      <div className='divider first-divider' />
      <div className='Body'>
        <div className='main-app'>
          <Welcome />
          <div className='divider' />
          <Biography />
          <div className='divider' />
          <div className='projects-underneath'>
            <Projects />
            <div className='divider' />
          </div>
          <Contact />
        </div>
        <div className='side-app'>
          <Projects />
        </div>
      </div>
      <SmallDevice />
    </Fragment>
  );
}
