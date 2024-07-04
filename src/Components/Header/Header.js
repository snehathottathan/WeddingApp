// NavbarComponent.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import WedImg from './../../assets/images/thewed.png'
import './Header.css';
import BottomPart from '../BottomPart/BottomPart';

const Header = () => {

  const location = useLocation();
  const getNavLinkClass = (path) => (location.pathname === path ? 'nav-link active' : 'nav-link');

  return (
    <div className='Header-main'>
      <div className='header'>
        <div className='wedimg'>
          <img src={WedImg}></img>
        </div>
        <div className='title'>
          <p className='para'>Geethu + Anoop </p>
          <p className='subpara'>MAY 26, 2027 • KANNUR, KERALA, INDIA </p>
        </div>
      </div>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"> */}
        {/* <Container> */}
          {/* <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav className="me-auto">
              <Nav.Link className={getNavLinkClass('/')} as={Link} to="/">Home</Nav.Link>
              <Nav.Link className={getNavLinkClass('/ourstory')} as={Link} to="/ourstory">OurStory</Nav.Link>
              <Nav.Link className={getNavLinkClass('/services')} as={Link} to="/savethedate">Save the Date</Nav.Link>
              <Nav.Link className={getNavLinkClass('/contact')} as={Link} to="/photos">Photos</Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        {/* </Container> */}
      {/* </Navbar> */}
      <div>
        {/* <BottomPart/> */}
      </div>
    </div>
  );
};

export default Header;
