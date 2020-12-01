/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import ButtonPanel from '../button_panel';

test('ButtenPanel not rendered', () => {
  const buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
});

test('ButtonPanel', () => {
  const { container } = render(<ButtonPanel clickHandler={() => {}} />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});

test('Types of the Props', () => {
  expect(ButtonPanel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});
