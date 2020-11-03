import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from './About';
import setupTests from '../../setupTests';

it('renders a DrinkPage by default', () => {
  const wrapper = shallow(<About />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
