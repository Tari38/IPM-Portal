import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import PressmanLogo from "../../images/color_logo_transparent.png";
import SCLogo from "../../images/ShieldCrest-new-logo.png";

import "./MemberNav.css";

export default function MemberNav() {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Container>
          <header>
          <Navbar.Brand>
            <img
              src={SCLogo}
              className="SC-Logo"
              alt="Shieldcrest Book Publisher logo"
            ></img>
          </Navbar.Brand>
          </header>
        </Container>
        <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Portal Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="side-portal-menu">
                  <Nav.Link href="#action1">Dashboard</Nav.Link>
                  <Nav.Link href="#action2">Statements</Nav.Link>
                  <Nav.Link href="#action3">Parties</Nav.Link>
                  <Nav.Link href="#action4">Help</Nav.Link>
                </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        </Navbar>
      </Navbar>
    </div>
  );
}
