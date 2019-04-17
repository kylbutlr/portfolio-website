import React, { Component } from 'react';
import SingleProject from './SingleProject';
import MultipleProject from './MultipleProject';

export default function Projects() {
  return (
    <div className='projects'>
      <h5>RECENT PROJECTS</h5>
      <MultipleProject
        number={5}
        type1={'react'}
        type2={'node'}
        title={'Public Chat'}
        appPreview={'https://kylbutlr-chat-app.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/public-chat-app'}
        apiGithub={'https://github.com/kylbutlr/public-chat-api'}
      />
      <MultipleProject
        number={4}
        type1={'react'}
        type2={'node'}
        title={'Notes'}
        appPreview={'https://kylbutlr-notes-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/notes-app-react'}
        apiGithub={'https://github.com/kylbutlr/notes-app-api'}
      />
      <MultipleProject
        number={3}
        type1={'react'}
        type2={'node'}
        title={'Todo List'}
        appPreview={'https://kylbutlr-todos-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/todo-list-react'}
        apiGithub={'https://github.com/kylbutlr/todo-list-api'}
      />
      <SingleProject
        number={2}
        type={'css'}
        title={'Flexbox Slideshow'}
        preview={'https://kylbutlr.github.io/flex-slideshow'}
        github={'https://github.com/kylbutlr/flex-slideshow'}
      />
      <SingleProject
        number={1}
        type={'js'}
        title={'Alarm & Timer'}
        preview={'https://kylbutlr.github.io/alarm-timer'}
        github={'https://github.com/kylbutlr/alarm-timer'}
      />
    </div>
  );
}
