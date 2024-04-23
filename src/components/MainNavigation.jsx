import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
console.log(classes);
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toggle"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Toggle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="useEffect"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              UseEffect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
