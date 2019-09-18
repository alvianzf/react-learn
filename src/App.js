import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import NavBar from "./Component/Navbar"

import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container fluid></Container>
      </>
    )
  }
}

export default App
