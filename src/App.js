import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import NavBar from "./Component/Navbar"
import Solv from "./Component/Solve"
import Carousels from './Component/Carousels'

import Hero from './Asset/images/slider.png'

import "./App.css"

class App extends Component {
  render() {
    return (
      <>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
      </Container>
        <Container fluid>
          <Row>
            <img alt="herojumbotron" src={Hero} />
          </Row>
          <Row className="cards">
            <Solv />
          </Row>
        </Container>
        <Container>
          <Carousels />
        </Container>
      </>
    )
  }
}

export default App
