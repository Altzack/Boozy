import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DrinkPage from './DrinkPage';
import setupTests from '../../setupTests';

it('renders a DrinkPage by default', () => {
  const wrapper = shallow(<DrinkPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
