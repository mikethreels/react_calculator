import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { amount } = props;
  return (
    <div className="display">
      {amount}
    </div>
  );
}

Display.defaultProps = {
  amount: '0',
};

Display.propTypes = {
  amount: PropTypes.string,
};
