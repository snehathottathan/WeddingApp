// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/registry" activeClassName="active">
            Registry
          </NavLink>
        </li>
        <li>
          <NavLink to="/rsvp" activeClassName="active">
            RSVP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
