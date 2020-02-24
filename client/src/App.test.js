import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });

  it('render correctly App component by default', () => {
    expect(shallowWrapper.exists()).toBe(true);
  });
});
