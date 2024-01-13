import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Loyaot = () => {
  return (
    <div>
      <header>
        <nav>
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/movies">Movies</NavLink>
          </span>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
