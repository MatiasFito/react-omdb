import React from 'react';
import shallow from 'enzyme/shallow';
import App from './index';

describe('App test suit', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should render App component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
})
