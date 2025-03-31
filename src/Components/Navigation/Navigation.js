import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="navigation">
      {isMobile && (
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      )}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active">Events</NavLink>
        </li>
        <li>
          <NavLink to="/registry" activeClassName="active">Registry</NavLink>
        </li>
        <li>
          <NavLink to="/rsvp" activeClassName="active">RSVP</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
