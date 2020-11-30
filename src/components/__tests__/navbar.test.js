/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../navbar';

describe('Test suits for MyComponentWithLink', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
