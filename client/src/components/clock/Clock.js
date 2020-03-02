import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

const Clock = ({ tracker }) => {
  const [counter, setCounter] = useState(tracker.accumulate);
  useEffect(() => {
    let timerID;
    if (tracker.active) {
      timerID = setInterval(() => {
        const acc = Date.now() - tracker.created + tracker.accumulate;
        setCounter(acc);
      }, 1000);
    } else {
      clearInterval(timerID);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [tracker]);

  const userTimezoneOffset = new Date(counter).getTimezoneOffset() * 60000;

  return (
    <Styles>
      <span className='tracker-time'>
        <span>
          {new Date(counter + userTimezoneOffset).toLocaleTimeString('en-GB')}
        </span>
      </span>
    </Styles>
  );
};

Clock.propTypes = {
  tracker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    created: PropTypes.number.isRequired,
    accumulate: PropTypes.number.isRequired,
  }).isRequired,
};

export default Clock;
