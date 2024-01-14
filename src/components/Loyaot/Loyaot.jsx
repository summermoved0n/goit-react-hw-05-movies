import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../../pages/styles.module.css';
import Loader from 'components/Loader/Loader';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  &.active {
    color: orange;
  }
`;

export const Loyaot = () => {
  return (
    <div className={css.conteiner}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense
          fallback={
            <div className={css.Loader}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
