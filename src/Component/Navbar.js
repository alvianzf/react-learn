import React, { Component } from "react"
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap"
import { FontAwesome } from "react-fontawesome"

import { Link } from "react-router-dom"

import "./App.scss"

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" fluid fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Placeholder</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#pricing">Help Centre</Nav.Link>
          <NavDropdown title="Join Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Join </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Cerdikiawan</Nav.Link>
        </Nav>

        <NavDropdown title="English">
          <NavDropdown.Item>Indonesian</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    )
  }
}
export default NavBar
