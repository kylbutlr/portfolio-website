import React, { Component } from 'react';
import './App.css';
import { scroller } from 'react-scroll';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Biography from './components/Biography';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  render() {
    return (
      <div className='App'>
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default App;
