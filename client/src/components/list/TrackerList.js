import React from 'react';
import TrackerItem from '../item/TrackerItem';
import Styles from './styles';

const TrackerList = () => (
  <Styles>
    <ul className='tracker-list'>
      <TrackerItem active />
      <TrackerItem />
      <TrackerItem active />
      <TrackerItem />
    </ul>
  </Styles>
);

export default TrackerList;
