import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from './Loader';
import setupTests from '../../setupTests';

it('renders a Loader by default', () => {
  const wrapper = shallow(<Loader />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
