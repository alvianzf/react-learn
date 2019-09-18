import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from '../Asset/images/gojek-logo_normal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Services from './Services'
import Join from './Join'
// import { Link } from "react-router-dom"

import "./App.scss"

class NavBar extends Component {

  render() {

    return (
      <Navbar bg="white" fixed="top">
        <Navbar.Brand href="#home"><img alt="gojek-logo" src={ Logo } /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <Services />
          </NavDropdown>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#pricing">Help Centre</Nav.Link>
          <NavDropdown title="Join Us" id="collasible-nav-dropdown">
            <Join />
          </NavDropdown>
          <Nav.Link>Cerdikiawan</Nav.Link>
        </Nav>

        <NavDropdown title={
            <FontAwesomeIcon icon={faGlobe} />}>
          <NavDropdown.Item>
            Indonesian
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    )
  }
}
export default NavBar
