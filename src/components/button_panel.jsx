import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

function ButtonPanel(props) {
  const handleClick = (buttonName => props.clickHandler(buttonName));
  return (
    <div className="panel">
      <div className="group1">
        <Button key="AC" name="buttongroup1" clickHandler={handleClick} buttonName="AC" />
        <Button key="+/-" name="buttongroup1" clickHandler={handleClick} buttonName="+/-" />
        <Button key="%" name="buttongroup1" clickHandler={handleClick} buttonName="%" />
        <Button key="÷" name="buttongroup1last" clickHandler={handleClick} buttonName="÷" />
      </div>
      <div className="group2">
        <Button key="8" name="buttongroup2" clickHandler={handleClick} buttonName="8" />
        <Button key="9" name="buttongroup2" clickHandler={handleClick} buttonName="9" />
        <Button key="7" name="buttongroup2" clickHandler={handleClick} buttonName="7" />
        <Button key="X" name="buttongroup2last" clickHandler={handleClick} buttonName="X" />
      </div>
      <div className="group3">
        <Button key="4" name="buttongroup3" clickHandler={handleClick} buttonName="4" />
        <Button key="5" name="buttongroup3" clickHandler={handleClick} buttonName="5" />
        <Button key="6" name="buttongroup3" clickHandler={handleClick} buttonName="6" />
        <Button key="-" name="buttongroup3last" clickHandler={handleClick} buttonName="-" />
      </div>
      <div className="group4">
        <Button key="1" name="buttongroup4" clickHandler={handleClick} buttonName="1" />
        <Button key="2" name="buttongroup4" clickHandler={handleClick} buttonName="2" />
        <Button key="3" name="buttongroup4" clickHandler={handleClick} buttonName="3" />
        <Button key="+" name="buttongroup4last" clickHandler={handleClick} buttonName="+" />
      </div>
      <div className="group5">
        <Button key="0" name="buttongroup5first" clickHandler={handleClick} buttonName="0" />
        <Button key="." name="buttongroup5" clickHandler={handleClick} buttonName="." />
        <Button key="=" name="buttongroup5last" clickHandler={handleClick} buttonName="=" />
      </div>
    </div>
  );
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
