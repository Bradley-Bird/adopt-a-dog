import { NavLink } from 'react-router-dom';

import React from 'react';

function Nav(setCurrentUser) {
  return (
    <div>
      <NavLink to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink to="/dogs/new">
        <h4>Admin</h4>
      </NavLink>
      <NavLink to="/auth">
        <h4>Sign In</h4>
      </NavLink>
    </div>
  );
}

export default Nav;
