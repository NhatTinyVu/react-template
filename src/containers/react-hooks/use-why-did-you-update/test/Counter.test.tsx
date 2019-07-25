import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Counter from '../Counter';

const props = {
  count: 0,
  style: {},
};

describe('Counter', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<Counter {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
