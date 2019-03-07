import React, { Component } from 'react';
import './App.css';
import { Link, Element, scroller } from 'react-scroll';
import Projects from './Projects';

const tabs = {
  HOME: 1,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: tabs.HOME,
    };
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
      <div className='App'>
        {/* Header */}
        <div className='Header'>
          <div className='title'>
            <h1>kb</h1>
            <h2>|</h2>
            <h3>kylbutlr</h3>
          </div>
          <div className='contact-link'>
            <Link activeClass='active' to='contact-element' spy={true} smooth={true} duration={500}>
              <h4>contact</h4>
            </Link>
          </div>
        </div>
        <div className='divider first-divider' />

        {/* Body */}
        <div className='Body'>
          <div className='main-app'>
            <div className='welcome'>
              <div className='headshot' />
              <h6>
                I'm <span className='bold'>Kyle Butler</span>, a junior web developer currently
                working in Los Angeles, CA.
              </h6>
            </div>
            <div className='divider' />
            <div className='bio'>
              <p>
                I specialize in <span className='bold'>React</span>,{' '}
                <span className='bold'>JavaScript</span>, and{' '}
                <span className='bold'>CSS + HTML</span>.
              </p>
              <p>
                I have also had experience working with <span className='bold'>SQL</span>,{' '}
                <span className='bold'>Java</span>, <span className='bold'>Python</span>, and{' '}
                <span className='bold'>PHP</span>, and look forward to learning and utilizing many
                more languages and frameworks throughout my career.
              </p>
            </div>
            <div className='divider' />
            <div className='projects-underneath'>
              <Projects />
              <div className='divider' />
            </div>
            <div className='contact'>
              <Element name='contact-element' className='element'>
                <h5>CONTACT</h5>
              </Element>
              <div className='socials'>
                <a href='mailto:kylbutlr@gmail.com'>
                  <div className='icon social-email' />
                </a>
                <a href='https://github.com/kylbutlr'>
                  <div className='icon social-github' />
                </a>
                <a href='https://www.linkedin.com/in/kylbutlr/'>
                  <div className='icon social-linkedin' />
                </a>
                <a href='https://www.instagram.com/kylbutlr/'>
                  <div className='icon social-instagram' />
                </a>
              </div>
              <p>
                Feel free to reach out at:{' '}
                <a href='mailto:kylbutlr@gmail.com'>kylbutlr@gmail.com</a>
              </p>
            </div>
          </div>
          <div className='side-app'>
            <Projects />
          </div>
        </div>
        <div className='divider last-divider' />
        <div className='Footer'>
          <p>© 2019 KYLE BUTLER</p>
        </div>
      </div>
    );
  }
}

export default App;
