// NavbarComponent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import WedImg from './../../assets/images/thewed.png';
import './Header.css';
import BottomPart from '../BottomPart/BottomPart';

const Header = () => {
  const location = useLocation();
  const getNavLinkClass = (path) =>
    location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <div className="Header-main">
      <div className="header">
        <div className="wedimg">
          <img src={WedImg} alt="Wedding" />
        </div>
        <div className="title">
          <p className="para">Geethu + Anoop</p>
          <p className="subpara">
            MAY 26, 2027 • KANNUR, KERALA, INDIA
          </p>
        </div>
      </div>
      <Container>
        <Nav className="me-auto">
          <Nav.Link className={getNavLinkClass('/')} as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link
            className={getNavLinkClass('/ourstory')}
            as={Link}
            to="/ourstory"
          >
            OurStory
          </Nav.Link>
          <Nav.Link
            className={getNavLinkClass('/savethedate')}
            as={Link}
            to="/savethedate"
          >
            Save the Date
          </Nav.Link>
          {/* <Nav.Link
            className={getNavLinkClass('/photos')}
            as={Link}
            to="/photos"
          >
            Photos
          </Nav.Link> */}
        </Nav>
      </Container>
      {/* Uncomment if BottomPart is needed */}
      {/* <BottomPart /> */}
    </div>
  );
};

export default Header;
