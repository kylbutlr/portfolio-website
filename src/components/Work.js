import React, { Component } from 'react';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.expandList = this.expandList.bind(this);
    this.state = {
      expandedList: false,
    };
  }

  expandList() {
    if (this.state.expandedList === false) {
      this.setState({ expandedList: true });
    } else {
      this.setState({ expandedList: false });
    }
    console.log(this.state.expandedList);
  }

  render() {
    return (
      <div className='projects'>
        <h5>RECENT WORK</h5>
        <div className='project1'>
          <a href='https://github.com/kylbutlr/public-chat-app'>
            <div className='project-image'>
              <div className='project-info'>
                <h6>Public Chat App</h6>
              </div>
            </div>
          </a>
        </div>
        <div className='project2'>
          <a href='https://github.com/kylbutlr/public-chat-api'>
            <div className='project-image'>
              <div className='project-info'>
                <h6>Public Chat (API)</h6>
              </div>
            </div>
          </a>
        </div>
        <div className='project3'>
          <a href='https://github.com/kylbutlr/notes-app-react'>
            <div className='project-image'>
              <div className='project-info'>
                <h6>Notes App (React)</h6>
              </div>
            </div>
          </a>
        </div>
        <div className='project4'>
          <a href='https://github.com/kylbutlr/notes-app-api'>
            <div className='project-image'>
              <div className='project-info'>
                <h6>Notes App (API)</h6>
              </div>
            </div>
          </a>
        </div>
        <div className='expand-projects'>
          <button
            className='expand-button'
            onClick={() => this.expandList()}>
            Expand List
          </button>
        </div>
        <div className='hidden-projects' style={{
              display: this.state.expandedList === true ? 'block' : 'none',
            }}>
          <div className='project5'>
            <a href='https://github.com/kylbutlr/todo-list-react'>
              <div className='project-image'>
                <div className='project-info'>
                  <h6>Todo List (React)</h6>
                </div>
              </div>
            </a>
          </div>
          <div className='project6'>
            <a href='https://github.com/kylbutlr/todo-list-api'>
              <div className='project-image'>
                <div className='project-info'>
                  <h6>Todo List (API)</h6>
                </div>
              </div>
            </a>
          </div>
          <div className='project7'>
            <a href='https://github.com/kylbutlr/alarm-timer'>
              <div className='project-image'>
                <div className='project-info'>
                  <h6>Alarm & Timer</h6>
                </div>
              </div>
            </a>
          </div>
          <div className='project8'>
            <a href='https://github.com/kylbutlr/flex-slideshow'>
              <div className='project-image'>
                <div className='project-info'>
                  <h6>Flex Slideshow</h6>
                </div>
              </div>
            </a>
          </div>
          <div className='project9'>
            <a href='https://github.com/kylbutlr/tip-recorder'>
              <div className='project-image'>
                <div className='project-info'>
                  <h6>Tip Recorder</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
