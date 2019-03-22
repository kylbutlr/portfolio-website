import React from 'react';
import { Element } from 'react-scroll';

export default () => (
  <div className='contact'>
    <Element name='contact-element' className='element mobile'>
      <h5>CONTACT</h5>
    </Element>
    <div className='socials mobile'>
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
    <p>
      Get in touch at:{' '}
      <a href='mailto:kylbutlr@gmail.com'>kylbutlr@gmail.com</a>
    </p>
  </div>
);
