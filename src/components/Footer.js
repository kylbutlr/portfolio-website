import React from 'react';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className='Footer' id='Footer'>
      <div className='divider last-divider' />
      <p>© {year} KYLE BUTLER</p>
    </div>
  );
}
