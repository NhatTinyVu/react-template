import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UseEffectAsync from '..';

describe('EventListener', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<UseEffectAsync />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
