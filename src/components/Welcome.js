import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='headshot' />
      <h6>
        I'm&nbsp;<span className='bold'>Kyle&nbsp;Butler</span>,
        <br />
        a&nbsp;full-stack&nbsp;web&nbsp;developer currently{' '}
        <span className='bold'>looking&nbsp;for&nbsp;work</span>
        &nbsp;in&nbsp;Los&nbsp;Angeles,&nbsp;CA.
      </h6>
    </div>
  );
}
