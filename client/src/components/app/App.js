import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Header from '../header/Header';
import TrackerInput from '../input/TrackerInput';
import TrackerList from '../list/TrackerList';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <div className='container'>
      <Header />
      <TrackerInput />
      <TrackerList />
    </div>
  </Provider>
);

export default App;
