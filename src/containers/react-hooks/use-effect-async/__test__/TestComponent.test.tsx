import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TestComponent from '../TestComponent';

describe('EventListener', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<TestComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
