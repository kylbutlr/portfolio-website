import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6 hidden>
        I'm&nbsp;<strong>Kyle&nbsp;Butler</strong>,
        <br />
        a&nbsp;full-stack&nbsp;web&nbsp;developer
        <br />
        currently&nbsp;working&nbsp;at&nbsp;
        <strong>
          <a href='https://ezadtv.com/' target='_blank' rel="noreferrer" aria-label='Go to: ezadtv.com'>EZ-AD TV</a>
        </strong>
      </h6>
      <h6>
        I'm&nbsp;<strong>Kyle&nbsp;Butler</strong>,
        <br />
        a&nbsp;full-stack&nbsp;web&nbsp;developer
        <br />
        working&nbsp;out&nbsp;of&nbsp;<strong>Los&nbsp;Angeles</strong>,&nbsp;CA
      </h6>
    </div>
  );
}
