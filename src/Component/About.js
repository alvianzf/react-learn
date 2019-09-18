import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

import MeetSolv from './About/MeetSolv'
import History from './About/History'

class About extends Component {
    render() {
        return (
            <Container>
                <Row  className="cards">
                    <MeetSolv />
                </Row>
                <Row className="cards">
                    <History />
                </Row>
            </Container>
        )
    }
}

export default About