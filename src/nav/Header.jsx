import React from "react";
import { Offcanvas, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/ShieldCrest-new-logo.png";
import {FaUserAlt} from "react-icons/fa";
import { logout } from '../actions/userActions';

import "./styles/Header.css";

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <header className="App-header">
       <Navbar expand={false}>
       <Container fluid>
          <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" id="burger-toggler" />

              <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="offcanvasNavbarLabel">Author Menu</Offcanvas.Title>
                </Offcanvas.Header>

                <hr />

                <Offcanvas.Body>

                  <Nav className="justify-content-end flex-grow-1 pe-3">

                    <Nav.Link to="/">Home</Nav.Link>

                    {userInfo ? (
                      <NavDropdown title={userInfo.name} id='username'>
                        <Nav.Link to="/profile">Profile</Nav.Link>
                        <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <LinkContainer to='/login'>
                        <Nav.Link>
                          <FaUserAlt />Sign In
                        </Nav.Link>
                      </LinkContainer>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title='Admin' id='adminmenu'>
                        <LinkContainer to='/admin/userlist'>
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>
      </header>
    </>
  );
 }

export default Header;
