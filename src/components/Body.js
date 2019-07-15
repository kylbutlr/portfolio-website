import React, { Fragment } from 'react';
import Welcome from './Welcome';
import Biography from './Biography';
import Contact from './Contact';
import Projects from './Projects';
import SmallDevice from './SmallDevice';

export default function Body() {
  return (
    <Fragment>
      <div className='divider first-divider' id='firstDivider' />
      <div className='Body'>
        <div className='main-app' id='mainApp'>
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
        <div className='side-app' id='sideApp'>
          <Projects />
        </div>
      </div>
      <SmallDevice />
    </Fragment>
  );
}
