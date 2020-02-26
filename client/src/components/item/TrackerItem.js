import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

const TrackerItem = ({ active }) => (
  <Styles active={active}>
    <li className='tracker-item'>
      <span className='tracker-name'>No name tracker #2</span>
      <div className='tracker-actions'>
        <span className='tracker-time'>00:01:32</span>
        <span className='icon icon-av' />
        <span className='icon icon-delete' />
      </div>
    </li>
  </Styles>
);

TrackerItem.defaultProps = {
  active: false,
};

TrackerItem.propTypes = {
  active: PropTypes.bool,
};

export default TrackerItem;
