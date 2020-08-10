import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6>
        I'm&nbsp;<strong><span class="large">Kyle&nbsp;Butler</span></strong>,&nbsp;a
        <br />
        Front-End&nbsp;Engineer&nbsp;at&nbsp;
        <strong>
          <a href='https://sdg.la/' target='_blank' rel='noreferrer' aria-label='Go to: SDG.la'>SDG</a>
        </strong>
        <span hidden>
          currently&nbsp;working&nbsp;with&nbsp;
          working&nbsp;out&nbsp;of&nbsp;<strong>Los&nbsp;Angeles</strong>
        </span>
      </h6>
    </div>
  );
}
