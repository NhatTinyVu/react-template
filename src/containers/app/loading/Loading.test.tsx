import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Loading from '.';

it('renders correctly', (): void => {
  const wrapper = shallow(<Loading />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
