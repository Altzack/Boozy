import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddDrink from './AddDrink';
import setupTests from '../../setupTests';

it('renders a AddDrink by default', () => {
  const wrapper = shallow(<AddDrink />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
