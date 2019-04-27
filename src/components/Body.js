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
        <div className='main-app' id='mainApp'>
          <Welcome />
          <div className='divider' />
          <div className='projects-underneath'>
            <Biography />
            <div className='divider' />
          </div>
          <Contact />
        </div>
        <div className='side-app' id='sideApp'>
          <Biography />
        </div>
      </div>
      <SmallDevice />
    </Fragment>
  );
}
