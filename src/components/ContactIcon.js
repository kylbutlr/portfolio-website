import React from 'react';

export default function ContactIcon({ type, link, desc }) {
  return (
    <a href={link} aria-label={desc}>
      <div className={'icon social-' + type} />
    </a>
  );
}
