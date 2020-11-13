import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

export default function App() {
  const temp = Calculate;
  // eslint-disable-next-line no-console
  console.log(temp);
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
