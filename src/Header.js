import React from 'react';
import { Link } from 'react-scroll';

export default () => (
  <div className='Header'>
    <div className='title'>
      <h1>kb</h1>
      <h2>|</h2>
      <h3>kylbutlr</h3>
    </div>
    <div className='contact-link'>
      <Link activeClass='active' to='contact-element' spy={true} smooth={true} duration={500}>
        <h4>contact</h4>
      </Link>
    </div>
  </div>
);
