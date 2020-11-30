/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import ButtonPanel from '../button_panel';

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

test('ButtonPanel', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  render(<ButtonPanel clickHandler={() => {}} />, cont);
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});

test('Types of the Props', () => {
  expect(ButtonPanel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});
