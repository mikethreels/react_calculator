/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import Display from '../display';

let cont = null;
beforeEach(() => {
  cont = document.createElement('div');
  document.body.appendChild(cont);
});

afterEach(() => {
  unmountComponentAtNode(cont);
  cont.remove();
  cont = null;
});

test('1. Display rendering', () => {
  render(<Display amount="12654" />, cont);
  expect(cont.textContent).toBe('12654');
});

test('2. Display the default value', () => {
  render(<Display amount={undefined} />, cont);
  expect(cont.textContent).toBe('0');
});

test('3. Types for the props', () => {
  expect(Display.propTypes.amount).toBe(PropTypes.string);
});
