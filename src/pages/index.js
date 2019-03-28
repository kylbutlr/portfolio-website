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
        <Helmet>
          <meta charSet='utf-8' />
          <title>Kyle Butler</title>
          <link rel='canonical' href='https://kylbutlr.com' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e3ccc4"/>
          <meta name="msapplication-TileColor" content="#111111"/>
          <meta name="theme-color" content="#111111"/>
        </Helmet>
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
