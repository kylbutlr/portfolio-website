import React, { Component } from 'react';
import '../css/App.css';
import { scroller } from 'react-scroll';
import HelmetHeaders from '../components/HelmetHeaders';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

class App extends Component {
  componentDidMount() {
    this.runResize(document, window);
    this.fadeIn(document, window);
  }
  
  runResize(document, window) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  fadeIn(document, window) {
    document.getElementById('App').classList.add('fade-in');
    document.getElementById('background').classList.add('fade-in');
    window.setTimeout(() => {
      document.getElementById('mainApp').classList.add('fade-in');
      window.setTimeout(() => {
        document.getElementById('sideApp').classList.add('fade-in');
      }, 1000);
    }, 1000);
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
      <div className='background' id='background'>
        <div className='App' id='App'>
          <HelmetHeaders />
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
