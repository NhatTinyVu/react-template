import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EventListener from '..';

describe('EventListener', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<EventListener />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
