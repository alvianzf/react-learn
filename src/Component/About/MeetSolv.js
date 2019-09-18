import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Isi2 from '../../Asset/images/isi2.jpg'


class MeetSolv extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Welcoming a fresh start</h2>
                        <p className="article">
                        Meet Solv, Gojek’s new logo
                        <br/>
                        Founded on the principle of solving everyday challenges with technology, the Gojek app has evolved from offering just ride-hailing to a suite of more than 20 services today. As we continue to grow as a leading tech company serving everyday solutions for millions of users across Southeast Asia, our passion for problem-solving grows.
                        <br />
                        This journey builds on our ever-present dedication to creating seamless experiences for users, and providing the socio-economy impact for millions of our partners (drivers, merchants, service providers).
                        <br />
                        Our new logo symbolizes Gojek’s transformation from being a ride-hailing service to becoming the largest Super App with three platforms: consumer, driver, and merchant applications, with a variety of smart ways to eliminate hassles.
                        <br />
                        We believe that with Gojek, and with continuous technological innovations, There Is Always A Way to solve everyday problems and affect positive social impact.
                        </p>
                    </Col>
                    <Col md={3}>
                        <img alt="isi2" width="100%" className="card-image" src={Isi2} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MeetSolv