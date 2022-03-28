import { NavLink } from 'react-router-dom';

import React from 'react';

function Nav() {
  return (
    <div>
      <NavLink to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink to="/dogs/new">
        <h4>Admin</h4>
      </NavLink>
    </div>
  );
}

export default Nav;
