import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import WhyDidYouUpdate from '..';

it('renders correctly', (): void => {
  const wrapper = shallow(<WhyDidYouUpdate />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
