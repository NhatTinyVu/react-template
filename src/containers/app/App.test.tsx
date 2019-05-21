import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from './App';

describe('<App />', (): void => {
  it('should render and match the snapshot', (): void => {
    const renderer = ReactTestUtils.createRenderer();
    expect(renderer.render(<App />)).toMatchSnapshot();
  });
});
