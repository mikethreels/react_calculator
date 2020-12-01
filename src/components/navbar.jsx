import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
