import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Sider from '.';

it('renders correctly', (): void => {
  const wrapper = shallow(<Sider />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
