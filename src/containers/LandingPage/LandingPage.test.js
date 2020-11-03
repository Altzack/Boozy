import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';
import setupTests from '../../setupTests';

it('renders a LandingPage by default', () => {
  const wrapper = shallow(<LandingPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
