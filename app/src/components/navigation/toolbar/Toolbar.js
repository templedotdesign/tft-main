import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';

const toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <nav>
        <ul>
          <NavLink activeClassName={classes.active} to="/" exact>Home</NavLink>
          <NavLink activeClassName={classes.active} to="/reservations">Reservations</NavLink>
          <NavLink activeClassName={classes.active} to="/payments">Payments</NavLink>
          <a href="https://www.disneytravelcenter.com/ms6f1ddcfc/" target="_blank" rel="noopener noreferrer">Disney</a>
          <NavLink activeClassName={classes.active} to="/group-travel">Group Travel</NavLink>
          <NavLink activeClassName={classes.active} to="/resources">Resources</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default toolbar;