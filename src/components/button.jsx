import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    buttonName,
    name,
    clickHandler,
  } = props;
  const handleClick = (buttonName => clickHandler(buttonName));

  return (
    <button onClick={() => handleClick(buttonName)} type="button" className={name}>
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
