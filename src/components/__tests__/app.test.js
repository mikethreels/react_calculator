import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';

describe('App', () => {
  it('Tests if component renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
