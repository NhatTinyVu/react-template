import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UseState from '.';

it('renders correctly', (): void => {
  const wrapper = shallow(<UseState />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
