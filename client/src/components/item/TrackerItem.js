import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import Clock from '../clock/Clock';

const TrackerItem = ({ tracker, onRemoveTracker, onUpdateTracker }) => (
  <Styles active={tracker.active}>
    <li className='tracker-item'>
      <span className='tracker-name'>{tracker.name}</span>
      <div className='tracker-actions'>
        <Clock tracker={tracker} />
        <button
          type='button'
          aria-label='Start Pause'
          className='icon icon-av'
          onClick={() => onUpdateTracker(tracker)}
        />
        <button
          type='button'
          aria-label='Delete'
          className='icon icon-delete'
          onClick={() => onRemoveTracker(tracker.id)}
        />
      </div>
    </li>
  </Styles>
);

TrackerItem.propTypes = {
  onRemoveTracker: PropTypes.func.isRequired,
  onUpdateTracker: PropTypes.func.isRequired,
  tracker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    created: PropTypes.number.isRequired,
  }).isRequired,
};

export default TrackerItem;
