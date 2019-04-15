import React, { Component } from 'react';
import Project from '../components/Project';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h5>RECENT WORK</h5>
        <Project number={9} title={'Public Chat App'} link={'https://github.com/kylbutlr/public-chat-app'} />
        <Project number={8} title={'Public Chat API'} link={'https://github.com/kylbutlr/public-chat-api'} />
        <Project number={7} title={'Notes App'} link={'https://github.com/kylbutlr/notes-app-react'} />
        <Project number={6} title={'Notes API'} link={'https://github.com/kylbutlr/notes-app-api'} />
        <Project number={5} title={'Todo List App'} link={'https://github.com/kylbutlr/todo-list-react'} />
        <Project number={4} title={'Todo List API'} link={'https://github.com/kylbutlr/todo-list-api'} />
        <Project number={3} title={'Alarm & Timer App'} link={'https://github.com/kylbutlr/alarm-timer'} />
        <Project number={2} title={'Flexbox Slideshow'} link={'https://github.com/kylbutlr/flex-slideshow'} />
        <Project number={1} title={'Tip Recorder App'} link={'https://github.com/kylbutlr/tip-recorder'} />
      </div>
    );
  }
}
