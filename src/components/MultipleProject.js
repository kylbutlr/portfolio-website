import React from 'react';
import getReadType from './readType';

export default function MultipleProject({ number, type1, type2, title, appPreview, appGithub, apiGithub, show }) {
  let readType1 = getReadType(type1);
  let readType2 = getReadType(type2);

  if (show) {
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
                <a href={appPreview} target='_blank' rel='noreferrer' aria-label='Preview a live demo'>
                  <h6>Preview</h6>
                </a>
                <a href={appGithub} target='_blank' rel='noreferrer' aria-label='View the source code'>
                  <h6>Github</h6>
                </a>
              </div>
              <div>
                <a href={apiGithub} target='_blank' rel='noreferrer' aria-label='View the source code'>
                  <h6>Github</h6>
                </a>
              </div>
            </div>
          </div>
          <div className='project-info'>
            <div className='project-info-icon'>
              <div className={'icon-' + type1} title={readType1} />
              <div className={'icon-' + type2} title={readType2} />
            </div>
            <h6>{title}</h6>
            <div className='icon-empty'/>
            <div className='arrow'>V</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
