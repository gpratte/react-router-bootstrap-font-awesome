import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

// Navbar must be a flex box because the "flex-row" class works
export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><i className="fa-solid fa-home"></i></Navbar.Brand>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
        {/*<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">*/}
        <Nav className="flex-row">
          <Nav.Link href="#link" className="pe-2 pe-lg-0">Link</Nav.Link>
          <NavDropdown title={<i className="fa-solid fa-user"></i>}
                       id="basic-nav-dropdown"
                       className="pe-2 pe-lg-0">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<i className="nav-home fas fa-bars"/>}
                       id="basic-nav-dropdown"
                       className="pe-2 pe-lg-0">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/*</Navbar.Collapse>*/}
      </Container>
    </Navbar>
  )
}