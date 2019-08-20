import React, { Component } from 'react';
import SingleProject from './SingleProject';
import MultipleProject from './MultipleProject';
//import randomize from './randomize';

export default function Projects() {
  //const random = randomize(3, 6);
  const random = [1,2,3,4,5,6];

  return (
    <div className='projects'>
      <h5>PUBLIC PROJECTS</h5>
      <MultipleProject
        show={random.includes(6)}
        number={6}
        type1={'react'}
        type2={'node'}
        title={'Notepad'}
        appPreview={'https://kylbutlr-notes-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/notes-app-react'}
        apiGithub={'https://github.com/kylbutlr/notes-app-api'}
      />
      <MultipleProject
        show={random.includes(5)}
        number={5}
        type1={'react'}
        type2={'node'}
        title={'Public Chat'}
        appPreview={'https://kylbutlr-chat-app.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/public-chat-app'}
        apiGithub={'https://github.com/kylbutlr/public-chat-api'}
      />
      <MultipleProject
        show={random.includes(4)}
        number={4}
        type1={'react'}
        type2={'node'}
        title={'Todo List'}
        appPreview={'https://kylbutlr-todos-react.herokuapp.com'}
        appGithub={'https://github.com/kylbutlr/todo-list-react'}
        apiGithub={'https://github.com/kylbutlr/todo-list-api'}
      />
      <SingleProject
        show={random.includes(3)}
        number={3}
        type={'vue'}
        title={'Simple Calculator'}
        preview={'https://kylbutlr-calculator.herokuapp.com'}
        github={'https://github.com/kylbutlr/vue-calculator'}
      />
      <SingleProject
        show={random.includes(2)}
        number={2}
        type={'css'}
        title={'Flexbox Slideshow'}
        preview={'https://kylbutlr.github.io/flex-slideshow'}
        github={'https://github.com/kylbutlr/flex-slideshow'}
      />
      <SingleProject
        show={random.includes(1)}
        number={1}
        type={'javascript'}
        title={'Alarm & Timer'}
        preview={'https://kylbutlr.github.io/alarm-timer'}
        github={'https://github.com/kylbutlr/alarm-timer'}
      />
    </div>
  );
}
