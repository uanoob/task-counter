import React from 'react';
import Styles from './styles';

const TrackerInput = () => (
  <Styles>
    <form className='tracker-form'>
      <input
        type='text'
        className='tracker-input'
        placeholder='Enter tracker name'
      />
      <span type='submit' className='icon icon-play' />
    </form>
  </Styles>
);

export default TrackerInput;
