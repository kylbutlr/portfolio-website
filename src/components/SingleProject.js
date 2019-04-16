import React from 'react';

export default function SingleProject({ number, title, preview, github }) {
  return (
    <div className={'SingleProject project' + number}>
      <div className='project-image'>
        <div className='project-details'>
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
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
}
