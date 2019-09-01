import React from 'react';

export default function ContactIcon({ type, link, desc }) {
  return (
    <a href={link} name={desc} aria-label={desc} target={type !== 'email' ? '_blank' : '_self'} rel='noreferrer'>
      <div className={'icon social-' + type} />
    </a>
  );
}
