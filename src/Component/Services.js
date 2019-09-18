import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './App.scss'

class Services extends Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>This</Col>
                    <Col md={3}>Middle</Col>
                    <Col>End</Col>
                </Row>
                
            </Container>
        );
    }
}

export default Services