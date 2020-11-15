import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
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

export default Display;
