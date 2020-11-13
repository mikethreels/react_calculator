import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

export default function App() {
  Calculate();
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
