/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Display from '../display';

test('1. Display rendering', () => {
  const { getByText } = render(<Display amount="12654" />);
  getByText('12654');
});

test('2. Display the default value', () => {
  const { getByText } = render(<Display amount={undefined} />);
  getByText('0');
});

test('3. Types for the props', () => {
  expect(Display.propTypes.amount).toBe(PropTypes.string);
});
