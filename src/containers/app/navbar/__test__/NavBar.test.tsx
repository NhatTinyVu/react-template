import React from 'react';
import { shallow } from 'enzyme';
import * as useRouter from 'use-react-router';
import toJSON from 'enzyme-to-json';
import NavBar from '..';

jest
  .spyOn(useRouter, 'default')
  .mockImplementation((): any => ({ location: { pathname: '/react-router' } }));

describe('NavBar', () => {
  test('renders correctly', (): void => {
    const wrapper = shallow(<NavBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
