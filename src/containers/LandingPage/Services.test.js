import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Services from './Services';
import setupTests from '../../setupTests';

it('renders a Serivces by default', () => {
  const wrapper = shallow(<Services />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
