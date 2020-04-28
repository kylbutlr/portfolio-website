import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6>
        I'm&nbsp;<strong><span class="large">Kyle&nbsp;Butler</span></strong>,&nbsp;a
        <br />
        Front-End&nbsp;Web&nbsp;Developer
        <br />
        currently&nbsp;working&nbsp;with&nbsp;
        <strong>
          <a href='https://sdg.la/' target='_blank' rel='noreferrer' aria-label='Go to: SDG.la'>SDG</a>
        </strong>
        <span hidden>
          working&nbsp;out&nbsp;of&nbsp;<strong>Los&nbsp;Angeles</strong>
        </span>
      </h6>
    </div>
  );
}
