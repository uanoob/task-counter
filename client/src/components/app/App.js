import React from 'react';
import Header from '../header/Header';
import TrackerInput from '../input/TrackerInput';
import TrackerList from '../list/TrackerList';
import './styles.css';

const App = () => (
  <div className='container'>
    <Header />
    <TrackerInput />
    <TrackerList />
  </div>
);

export default App;
