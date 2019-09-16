import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6>
        I'm&nbsp;<strong>Kyle&nbsp;Butler</strong>,&nbsp;a
        <br />
        Front-End&nbsp;Web&nbsp;Developer
        <br />
        currently&nbsp;working&nbsp;at&nbsp;
        <strong>
          <a href='https://sdg.la/' target='_blank' rel='noreferrer' aria-label='Go to: SDG.la'>SDG</a>
        </strong>
      </h6>
      <h6 hidden>
        I'm&nbsp;<strong>Kyle&nbsp;Butler</strong>,
        <br />
        a&nbsp;full-stack&nbsp;web&nbsp;developer
        <br />
        working&nbsp;out&nbsp;of&nbsp;<strong>Los&nbsp;Angeles</strong>
      </h6>
    </div>
  );
}
