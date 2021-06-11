import React from 'react';
import { shallow } from 'enzyme';

import App from './../index';

describe('App component', () => {
  test('should render App component by default', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
