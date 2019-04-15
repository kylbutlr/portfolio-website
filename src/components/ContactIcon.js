import React from 'react';

export default function ContactIcon({ type, link }) {
  return (
    <a href={link}>
      <div className={'icon social-' + type} />
    </a>
  );
}
