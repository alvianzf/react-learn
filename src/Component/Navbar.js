import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from '../Asset/images/gojek-logo_normal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Services from './Services'
import Join from './Join'

import {Link, Route, BrowserRouter as Router } from "react-router-dom"

import "./App.scss"

class NavBar extends Component {

  render() {

    return (
      <Navbar bg="white" fixed="top">
        <Navbar.Brand href="/"><img alt="gojek-logo" src={ Logo } /></Navbar.Brand>
        <Nav className="mr-auto">
          <Router>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <Services />
            </NavDropdown>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Help Centre</Nav.Link>
            <NavDropdown title="Join Us" id="collasible-nav-dropdown">
              <Join />
            </NavDropdown>
            <Nav.Link href="/cerdikiawan">Cerdikiawan</Nav.Link>
          </Router>
        </Nav>

        <NavDropdown title={(<FontAwesomeIcon icon={faGlobe} > English </FontAwesomeIcon>)}>
          <NavDropdown.Item>
            Indonesian
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    )
  }
}
export default NavBar
