import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../quote';

it('Quotes component renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
