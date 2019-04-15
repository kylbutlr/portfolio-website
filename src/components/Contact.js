import React from 'react';
import { Element } from 'react-scroll';
import ContactIcon from '../components/ContactIcon';

export default () => (
  <div className='contact'>
    <Element name='contact-element' className='element mobile'>
      <h5>CONTACT</h5>
    </Element>
    <div className='socials mobile'>
      <ContactIcon type={'email'} link={'mailto:kylbutlr@gmail.com'} />
      <ContactIcon type={'github'} link={'https://github.com/kylbutlr'} />
      <ContactIcon type={'linkedin'} link={'https://www.linkedin.com/in/kylbutlr/'} />
      <ContactIcon type={'instagram'} link={'https://www.instagram.com/kylbutlr/'} />
    </div>
    <p>
      Get in touch at: <a href='mailto:kylbutlr@gmail.com'>kylbutlr@gmail.com</a>
    </p>
  </div>
);
