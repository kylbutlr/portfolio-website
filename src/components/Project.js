import React from 'react';

export default function Project({number, title, link}) {
  return (
    <div className={'project'+number}>
      <a href={link}>
        <div className='project-image'>
          <div className='project-info'>
            <h6>{title}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}
