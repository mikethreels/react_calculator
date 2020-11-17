import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState('black');

  const handleClick = buttonName => {
    const updateData = Calculate(state, buttonName);
    setState(updateData);
  };
  return (
    <div>
      <Display amount={state.next || state.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
