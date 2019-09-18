import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ImageOne from '../Asset/images/isi1.jpg'
class Solv extends Component {
    render() {
        return (
            <Row className="cards">
                <Col className="cards">
                    <img width="90%" alt="isi1" src={ImageOne} className="card-image"/>
                </Col>
                <Col className="cards">
                    <h3>Meet Solv, Gojek's new logo</h3>
                    <p>
                    Our new logo symbolizes Gojek’s transformation from being a ride-hailing service to becoming the largest Super App, with a variety of smart ways to eliminate hassles.
                    </p>
                    <h6 href="#" className="link">Find Out Here <FontAwesomeIcon icon={faArrowRight} /></h6>
                </Col>
            </Row>
        )
    }
}

export default Solv