import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReactHooks from '..';

describe('ReactHooks', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<ReactHooks />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
