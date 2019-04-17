import React from 'react';

export default function MultipleProject({ number, title, appPreview, appGithub, apiGithub }) {
  return (
    <div className={'MultipleProject project project' + number}>
      <div className='project-image'>
        <div className='project-details'>
          <div className='project-details-type'>
            <h6>App:</h6>
            <h6>API:</h6>
          </div>
          <div className='project-details-links'>
            <div>
              <a href={appPreview}>
                <h6>Preview</h6>
              </a>
              <a href={appGithub}>
                <h6>Github</h6>
              </a>
            </div>
            <div>
              <a href={apiGithub}>
                <h6>Github</h6>
              </a>
            </div>
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
