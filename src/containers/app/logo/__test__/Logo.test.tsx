import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Logo from '..';

describe('Logo', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<Logo />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
