import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import { scroller } from 'react-scroll';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Biography from '../components/Biography';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('fade1').classList.add('reveal');
      console.log('fade1');
    }, 750);
    setTimeout(() => {
      document.getElementById('fade2').classList.add('reveal');
      console.log('fade2');
    }, 1500);
    setTimeout(() => {
      document.getElementById('fade3').classList.add('reveal');
      console.log('fade3');
    }, 2250);
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  
  render() {
    return (
      <div className='App' id='App'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kyle Butler</title>
          <link rel="canonical" href="https://kylbutlr.com" />
        </Helmet>
        <Header />
        <div className='divider first-divider fade2' id='fade2' />
        <div className='Body fade3' id='fade3'>
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
