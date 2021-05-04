
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInuser, signOutUser } from '../helpers/auth';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavItem>
        <Link className="nav-link" to="/add-student">Add Student</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/students">Student Cards</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">React</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
            <NavItem>
              {
                user !== null
                && <NavItem>
                  {
                    user
                      ? <Button color='info' onClick={signOutUser}>Sign Out</Button>
                      : <Button color='info' onClick={signInUser}>Sign Out</Button>
                  }
              }
            </NavItem>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NaveBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
