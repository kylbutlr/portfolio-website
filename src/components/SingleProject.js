import React from 'react';

export default function SingleProject({ number, type, title, preview, github }) {
  return (
    <div className={'SingleProject project project' + number}>
      <div className='project-image'>
        <div className='project-details'>
          <div className='project-details-type'>
            <h6>App:</h6>
          </div>
          <div>
            <a href={preview}>
              <h6>Preview</h6>
            </a>
            <a href={github}>
              <h6>Github</h6>
            </a>
          </div>
        </div>
        <div className='project-info'>
          <div className='project-info-icon'>
            <div className={'icon-' + type} />
          </div>
          <h6>{title}</h6>
          <div className='arrow'>V</div>
        </div>
      </div>
    </div>
  );
}
