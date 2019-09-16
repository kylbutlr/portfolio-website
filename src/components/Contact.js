import React from 'react';
import { Element } from 'react-scroll';
import ContactIcon from './ContactIcon';

export default function Contact() {
  return (
    <div className='contact'>
      <Element name='contact-element' className='element mobile'>
        <h5>CONTACT</h5>
      </Element>
      <div className='socials mobile'>
        <ContactIcon type={'email'} link={'mailto:kylbutlr@gmail.com'} desc={'Send me an email'} />
        <ContactIcon type={'github'} link={'https://github.com/kylbutlr'} desc={'Go to my GitHub'} />
        <ContactIcon type={'linkedin'} link={'https://www.linkedin.com/in/kylbutlr/'} desc={'Go to my LinkedIn'} />
        {/*<ContactIcon type={'resume'} link={'https://kylbutlr.github.io/my-resume/'} desc={'See my Resume/Cv'} />*/}
        <ContactIcon type={'instagram'} link={'https://www.instagram.com/kylbutlr/'} desc={'Go to my Instagram'} />
      </div>
      <p>
        Get in touch: <a href='mailto:kylbutlr@gmail.com' aria-label='Send me an email'>kylbutlr@gmail.com</a>
      </p>
    </div>
  );
}
