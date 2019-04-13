import React, { Component } from 'react';
import '../css/App.css';
import { scroller } from 'react-scroll';
import HelmetHeaders from '../components/HelmetHeaders';
import Header from '../components/Header';
import Body from '../components/Body';
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
        <HelmetHeaders />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
