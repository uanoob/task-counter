import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import * as actions from '../../store/trackers';
import Styles from './styles';

const TrackerInput = ({ addTracker }) => {
  const [trackerName, setTrackerName] = useState('');
  const handleChange = e => {
    if (e.target.value !== '') {
      setTrackerName(e.target.value);
    }
  };
  const handleClear = () => {
    setTrackerName('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      id: uuidv1(),
      name: trackerName,
      active: true,
      created: Date.now(),
      accumulate: 0,
    };
    addTracker(data);
    handleClear();
  };
  return (
    <Styles>
      <form className='tracker-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='tracker-input'
          placeholder='Enter tracker name'
          value={trackerName}
          onChange={handleChange}
        />
        <button type='submit' aria-label='Submit' className='icon icon-play' />
      </form>
    </Styles>
  );
};

TrackerInput.propTypes = {
  addTracker: PropTypes.func.isRequired,
};

export default connect(null, actions)(TrackerInput);
