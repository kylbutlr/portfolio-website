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
      <Link className='mobile' activeClass='active' to='contact-element' spy={true} smooth={true} duration={500}>
        <h4>contact</h4>
      </Link>
      <div className='desktop'>
        <a href='mailto:kylbutlr@gmail.com'>
          <div className='icon social-email' />
        </a>
        <a href='https://github.com/kylbutlr'>
          <div className='icon social-github' />
        </a>
        <a href='https://www.linkedin.com/in/kylbutlr/'>
          <div className='icon social-linkedin' />
        </a>
        <a href='https://www.instagram.com/kylbutlr/'>
          <div className='icon social-instagram' />
        </a>
      </div>
    </div>
  </div>
);
