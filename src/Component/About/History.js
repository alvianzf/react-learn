import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Isi3 from '../../Asset/images/isi3.jpg'


class History extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <img width="100%" className="card-image" alt="isi3" src={ Isi3 } />
                    </Col>
                    <Col md="9">
                        <h3>History</h3>
                        <p className="article">
                            Gojek’s journey began in 2010 as a motorcycle ride-hailing call center in Indonesia. The homegrown app was then launched in 2015 with only three services: GoRide, GoSend, and GoMart.
                            <br /><br />
                            Since then, the app has evolved into a Super App, a multi-services platform with more than 20 services today.
                            <br /><br />
                            Gojek is now a leading technology group of platform serving millions of users in Southeast Asia.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default History