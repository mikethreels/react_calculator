import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import Buttons from './button';

export default function ButtonPanel() {
  return (
    <div className="panel">
      <div className="group1">
        <Buttons value="AC" name="buttongroup1" />
        <Buttons value="+/-" name="buttongroup1" />
        <Buttons value="%" name="buttongroup1" />
        <Buttons value="÷" name="buttongroup1last" />
      </div>
      <div className="group2">
        <Buttons value="8" name="buttongroup2" />
        <Buttons value="9" name="buttongroup2" />
        <Buttons value="7" name="buttongroup2" />
        <Buttons value="X" name="buttongroup2last" />
      </div>
      <div className="group3">
        <Buttons value="4" name="buttongroup3" />
        <Buttons value="5" name="buttongroup3" />
        <Buttons value="6" name="buttongroup3" />
        <Buttons value="-" name="buttongroup3last" />
      </div>
      <div className="group4">
        <Buttons value="1" name="buttongroup4" />
        <Buttons value="2" name="buttongroup4" />
        <Buttons value="3" name="buttongroup4" />
        <Buttons value="+" name="buttongroup4last" />
      </div>
      <div className="group5">
        <Buttons value="0" name="buttongroup5first" />
        <Buttons value="." name="buttongroup5" />
        <Buttons value="=" name="buttongroup5last" />

      </div>
    </div>
  );
}
