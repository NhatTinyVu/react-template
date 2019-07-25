import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Pages from '..';

describe('Pages', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<Pages />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
