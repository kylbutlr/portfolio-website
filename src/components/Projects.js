import React, { Component } from 'react';
import SingleProject from './SingleProject';
import MultipleProject from './MultipleProject';

export default function Projects() {
  return (
    <div className='projects'>
      <h5>RECENT PROJECTS</h5>
      <MultipleProject
        number={6}
        title={'Public Chat'}
        appPreview={'https://kylbutlr-chat-app.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/public-chat-app'}
        apiGithub={'https://github.com/kylbutlr/public-chat-api'}
      />
      <MultipleProject
        number={5}
        title={'Notes'}
        appPreview={'https://kylbutlr-notes-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/notes-app-react'}
        apiGithub={'https://github.com/kylbutlr/notes-app-api'}
      />
      <MultipleProject
        number={4}
        title={'Todo List'}
        appPreview={'https://kylbutlr-todos-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/todo-list-react'}
        apiGithub={'https://github.com/kylbutlr/todo-list-api'}
      />
      <SingleProject
        number={3}
        title={'Flexbox Slideshow'}
        preview={'https://kylbutlr.github.io/flex-slideshow'}
        github={'https://github.com/kylbutlr/flex-slideshow'}
      />
      <SingleProject
        number={2}
        title={'Alarm & Timer'}
        preview={'https://kylbutlr.github.io/alarm-timer'}
        github={'https://github.com/kylbutlr/alarm-timer'}
      />
      <SingleProject
        number={1}
        title={'Tip Recorder'}
        preview={'https://kylbutlr.github.io/tip-recorder'}
        github={'https://github.com/kylbutlr/tip-recorder'}
      />
    </div>
  );
}
