import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditDrink from './EditDrink';
import setupTests from '../../setupTests';

it('renders a EditDrink by default', () => {
  const wrapper = shallow(<EditDrink />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
