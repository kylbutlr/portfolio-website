import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6>
        I'm&nbsp;<span className='bold'>Kyle&nbsp;Butler</span>,
        <br />
        a&nbsp;full-stack&nbsp;web&nbsp;developer
        <br />
        working&nbsp;at&nbsp;
        <span className='bold'>
          <a href='https://ezadtv.com/'>EZ-AD TV</a>
        </span>
      </h6>
    </div>
  );
}
