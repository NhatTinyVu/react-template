import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

it('renders correctly', (): void => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
