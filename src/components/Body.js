import React, { Fragment } from 'react';
import Welcome from '../components/Welcome';
import Biography from '../components/Biography';
import Work from '../components/Work';
import Contact from '../components/Contact';

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
            <Work />
            <div className='divider' />
          </div>
          <Contact />
        </div>
        <div className='side-app'>
          <Work />
        </div>
      </div>
      <div className='small-device'>
        <h6>Sorry, this device's screen is too small to view this website properly.</h6>
      </div>
    </Fragment>
  );
}
