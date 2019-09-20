import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import logo from "../Asset/images/logo2.png"

class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid>
        <Row>
          <Col>
            <img alt="logo" src={logo} />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
