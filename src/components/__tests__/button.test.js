/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PropTypes from 'prop-types';
import Button from '../button';

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

test('1. Button rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  act(() => {
    render(<Button key="9" name="buttongroup1" clickHandler={() => {}} buttonName="9" />, cont);
  });
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('2. Button renders the value', () => {
  act(() => {
    render(<Button key="9" name="buttongroup1" clickHandler={() => {}} buttonName="9" />, cont);
  });
  const buttons = document.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('9');
});

test('Types of the Props', () => {
  expect(Button.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
  expect(Button.propTypes.name).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.buttonName).toBe(PropTypes.string.isRequired);
});
