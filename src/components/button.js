import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Buttons(props) {
  const { value, name } = props;
  return (
    <button
      type="button"
      className={name}
    >
      { value }
    </button>
  );
}

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
