import React from 'react';
import { shallow } from 'enzyme';
import * as useRouter from 'use-react-router';
import toJSON from 'enzyme-to-json';
import { Item } from '../Sider';
import Sider from '..';

jest
  .spyOn(useRouter, 'default')
  .mockImplementation((): any => ({ location: { pathname: '/react-router' } }));

describe('Sider', () => {
  test('renders without crashing', (): void => {
    const wrapper = shallow(<Sider />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', (): void => {
    const wrapper = shallow(<Item url="url" title="title" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
