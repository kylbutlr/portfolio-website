import React from 'react';
import { Link } from 'react-scroll';
import ContactIcon from './ContactIcon';

export default function Header() {
  return (
  <div className='Header'>
    <div className='title'>
      <h1>kb</h1>
      <h2>|</h2>
      <h3>kyl</h3>
      <div className='flashing-title'>
        <h3 className='kylbutlr'>butlr</h3>
        <h3 className='kylebutler'>e butler</h3>
      </div>
    </div>
    <div className='contact-link'>
      <Link
        className='mobile'
        activeClass='active'
        to='contact-element'
        spy={true}
        smooth={true}
        duration={500}>
        <h4>contact</h4>
      </Link>
      <div className='desktop'>
        <ContactIcon type={'email'} link={'mailto:kylbutlr@gmail.com'} />
        <ContactIcon type={'github'} link={'https://github.com/kylbutlr'} />
        <ContactIcon type={'linkedin'} link={'https://www.linkedin.com/in/kylbutlr/'} />
        <ContactIcon type={'instagram'} link={'https://www.instagram.com/kylbutlr/'} />
      </div>
    </div>
  </div>
);
}