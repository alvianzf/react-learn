import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import NavBar from "./Component/Navbar"

import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer'

import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container fluid className="page">
          <Router>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
          </Router>
        </Container>
        <Footer />
      </>
    )
  }
}

export default App
