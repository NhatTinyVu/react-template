import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Logo from '.';

it('renders correctly', (): void => {
  const wrapper = shallow(<Logo />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
