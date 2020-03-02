import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/trackers';
import TrackerItem from '../item/TrackerItem';
import Styles from './styles';

const TrackerList = ({
  fetchTrackers,
  removeTracker,
  updateTracker,
  trackers,
}) => {
  useEffect(() => {
    fetchTrackers();
  }, [fetchTrackers]);
  const handleUpdateTracker = tracker => {
    const now = !tracker.active ? tracker.created : Date.now();
    const acc = now - tracker.created + tracker.accumulate;
    const data = {
      id: tracker.id,
      name: tracker.name,
      active: !tracker.active,
      created: tracker.active ? tracker.created : Date.now(),
      accumulate: acc,
    };
    updateTracker(data);
  };
  return (
    <Styles empty={trackers.length === 0}>
      <ul className='tracker-list'>
        {trackers.map(tracker => (
          <TrackerItem
            key={tracker.id}
            onRemoveTracker={removeTracker}
            onUpdateTracker={handleUpdateTracker}
            tracker={tracker}
          />
        ))}
      </ul>
    </Styles>
  );
};

const mapStateToProps = state => ({
  trackers: state.trackers.data,
});

TrackerList.propTypes = {
  fetchTrackers: PropTypes.func.isRequired,
  removeTracker: PropTypes.func.isRequired,
  updateTracker: PropTypes.func.isRequired,
  trackers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      created: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, actions)(TrackerList);
