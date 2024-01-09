import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Loyaot = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
