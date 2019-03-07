import React, { Component } from 'react';
import './App.css';

const tabs = {
  HOME: 1,
};

class App extends Component {
  constructor(props) {
    super(props);
    //this.function = this.function.bind(this);
    this.state = {
      activeTab: tabs.HOME,
    };
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
            <h4>contact</h4>
          </div>
        </div>

        {/* Body */}
        <div className='Body'>
          <div className='divider' />
          <div className='welcome'>
            <h6>
              I'm <span className='bold'>Kyle Butler</span>, a junior web developer currently
              working in Los Angeles, CA.
            </h6>
          </div>
          <div className='divider' />
          <div className='bio'>
            <p>
              I specialize in <span className='bold'>React</span>,{' '}
              <span className='bold'>JavaScript</span>, and <span className='bold'>CSS + HTML</span>.
            </p>
            <p>
              I have also had past experience working with <span className='bold'>SQL</span>,{' '}
              <span className='bold'>Java</span>, <span className='bold'>Python</span>, and{' '}
              <span className='bold'>PHP</span>, and look forward to learning and utilizing many more languages/front-ends.
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

            {/*<a href='https://github.com/kylbutlr/notes-app-api' />
            <a href='https://github.com/kylbutlr/todo-list' />
            <a href='https://github.com/kylbutlr/alarm-timer' />
            <a href='https://github.com/kylbutlr/flex-slideshow' />
            <a href='https://github.com/kylbutlr/tip-recorder' />*/}
          </div>
          <div className='divider' />
          <div className='contact'>
            <h5>CONTACT</h5>
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
