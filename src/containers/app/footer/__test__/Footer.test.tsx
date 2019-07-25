import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '..';

describe('Footer', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<Footer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
