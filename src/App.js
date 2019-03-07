import React, { Component } from 'react';
import './App.css';
import { Link, Element, scroller } from "react-scroll";

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
      smooth: 'easeInOutQuart'
    })
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
            <Link activeClass="active" to="contact-element" spy={true} smooth={true} duration={500} ><h4>contact</h4></Link>
          </div>
        </div>

        {/* Body */}
        <div className='Body'>
          <div className='divider' />
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
              <span className='bold'>JavaScript</span>, and <span className='bold'>CSS + HTML</span>
              .
            </p>
            <p>
              I have also had past experience working with <span className='bold'>SQL</span>,{' '}
              <span className='bold'>Java</span>, <span className='bold'>Python</span>, and{' '}
              <span className='bold'>PHP</span>, and look forward to learning and utilizing many
              more languages and front-ends throughout my career.
            </p>
          </div>
          <div className='divider' />
          <div className='projects'>
            <h5>PROJECTS</h5>
            <div className='project1'>
              <a href='https://github.com/kylbutlr/notes-app-react'>
                <div className='project-image'>
                  <h6>Notes App (React)</h6>
                </div>
              </a>
            </div>
            <div className='project2'>
              <a href='https://github.com/kylbutlr/notes-app-api'>
                <div className='project-image'>
                  <h6>Notes App (API)</h6>
                </div>
              </a>
            </div>
            <div className='project3'>
              <a href='https://github.com/kylbutlr/todo-list'>
                <div className='project-image'>
                  <h6>Todo List App</h6>
                </div>
              </a>
            </div>
            <div className='project4'>
              <a href='https://github.com/kylbutlr/alarm-timer'>
                <div className='project-image'>
                  <h6>Alarm & Timer</h6>
                </div>
              </a>
            </div>
            <div className='project5'>
              <a href='https://github.com/kylbutlr/flex-slideshow'>
                <div className='project-image'>
                  <h6>Flex Slideshow</h6>
                </div>
              </a>
            </div>
            <div className='project6'>
              <a href='https://github.com/kylbutlr/tip-recorder'>
                <div className='project-image'>
                  <h6>Tip Recorder</h6>
                </div>
              </a>
            </div>
          </div>
          <div className='divider' />
          <div className='contact'>
            <Element name='contact-element' className='element'>
            <h5>CONTACT</h5></Element>
            <p>
              Feel free to reach out at: <a href='mailto:kylbutlr@gmail.com'>kylbutlr@gmail.com</a>
            </p>
            <div className='socials'>
              <a href='mailto:kylbutlr@gmail.com'>
                <div className='social-email' />
              </a>
              <a href='https://github.com/kylbutlr'>
                <div className='social-github' />
              </a>
              <a href='https://www.linkedin.com/in/kylbutlr/'>
                <div className='social-linkedin' />
              </a>
              <a href='https://www.instagram.com/kylbutlr/'>
                <div className='social-instagram' />
              </a>
            </div>
          </div>
          <div className='divider last-divider' />
          <div className='footer'>
            <p>© 2019 KYLE BUTLER</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
