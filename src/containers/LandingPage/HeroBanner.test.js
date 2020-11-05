import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HeroBanner from './HeroBanner';
import setupTests from '../../setupTests';

it('renders a HeroBanner by default', () => {
  const wrapper = shallow(<HeroBanner />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
