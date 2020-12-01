/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Button from '../button';

test('button not rendered', () => {
  const buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
});

test('1. Button rendering', () => {
  const { container } = render(<Button key="9" name="buttongroup1" clickHandler={() => {}} buttonName="9" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('2. Button renders the value', () => {
  const { container } = render(<Button key="9" name="buttongroup1" clickHandler={() => {}} buttonName="9" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('9');
});

test('Types of the Props', () => {
  expect(Button.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
  expect(Button.propTypes.name).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.buttonName).toBe(PropTypes.string.isRequired);
});
