import React, { Component } from 'react';
import '../css/App.css';
import { scroller } from 'react-scroll';
import HelmetHeaders from '../components/HelmetHeaders';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const windowGlobal = typeof window !== 'undefined' && window;
const documentGlobal = typeof document !== 'undefined' && document;

class App extends Component {
  componentDidMount() {
    this.runResize(documentGlobal, windowGlobal);
    this.fadeIn(documentGlobal, windowGlobal);
  }
  
  runResize(documentGlobal, windowGlobal) {
    let vh = windowGlobal.innerHeight * 0.01;
    documentGlobal.documentElement.style.setProperty('--vh', `${vh}px`);
    windowGlobal.addEventListener('resize', () => {
      let vh = windowGlobal.innerHeight * 0.01;
      documentGlobal.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  fadeIn(documentGlobal, windowGlobal) {
    documentGlobal.getElementById('App').classList.add('fade-in');
    documentGlobal.getElementById('background').classList.add('fade-in');
    windowGlobal.setTimeout(() => {
      documentGlobal.getElementById('Header').classList.add('fade-in');
      documentGlobal.getElementById('firstDivider').classList.add('fade-in25');
      documentGlobal.getElementById('Footer').classList.add('fade-in');
      windowGlobal.setTimeout(() => {
        documentGlobal.getElementById('mainApp').classList.add('fade-in');
        windowGlobal.setTimeout(() => {
          documentGlobal.getElementById('sideApp').classList.add('fade-in');
        }, 750);
      }, 750);
    }, 750);
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
