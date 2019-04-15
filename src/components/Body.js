import React, { Fragment } from 'react';
import Welcome from '../components/Welcome';
import Biography from '../components/Biography';
import Projects from './Projects';
import Contact from '../components/Contact';
import SmallDevice from '../components/SmallDevice';

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
