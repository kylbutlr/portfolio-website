import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import { scroller } from 'react-scroll';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Biography from '../components/Biography';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class App extends Component {
  componentDidMount() {
    this.runResize();
  }
  
  runResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
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
      <Scrollbars autoHide autoHeight autoHeightMax={`calc(var(--vh, 1vh) * 100)`}>
        <div className='App'>
          <Helmet>
            <meta charSet='utf-8' />
            <title>Kyle Butler</title>
            <link rel='canonical' href='https://kylbutlr.com' />
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
      </Scrollbars>
    );
  }
}

export default App;
