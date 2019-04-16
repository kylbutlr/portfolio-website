import React from 'react';

export default function MultipleProject({ number, title, appPreview, appGithub, apiGithub }) {
  return (
    <div className={'MultipleProject project project' + number}>
      <div className='project-image'>
        <div className='project-details'>
          <div>
            <h6 className='project-details-type'>App:</h6>
            <a href={appPreview}>
              <h6>Preview</h6>
            </a>
            <a href={appGithub}>
              <h6>Github</h6>
            </a>
          </div>
          <div>
            <h6 className='project-details-type'>API:</h6>
            <a href={apiGithub}>
              <h6>Github</h6>
            </a>
          </div>
        </div>
        <div className='project-info'>
          <div />
          <h6>{title}</h6>
          <div className='arrow'>V</div>
        </div>
      </div>
    </div>
  );
}
