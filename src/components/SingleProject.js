import React from 'react';
import getReadType from './readType';

export default function SingleProject({ number, type, title, preview, github, show }) {
  let readType = getReadType(type);
  
  if (show) {
    return (
      <div className={'SingleProject project project' + number}>
        <div className='project-image'>
          <div className='project-details'>
            <div className='project-details-type'>
              <h6>App:</h6>
            </div>
            <div>
              <a href={preview} target='_blank' rel="noreferrer" aria-label='Preview a live demo'>
                <h6>Preview</h6>
              </a>
              <a href={github} target='_blank' rel="noreferrer" aria-label='View the source code'>
                <h6>Github</h6>
              </a>
            </div>
          </div>
          <div className='project-info'>
            <div className='project-info-icon'>
              <div className={'icon-' + type} title={readType} />
            </div>
            <h6>{title}</h6>
            <div className='arrow'>V</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
