import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import icon1 from "./../../../Asset/images/icon1.png"

class Cards extends Component {
    

    render() {

        return (
            <Card className="goride" bg="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <img src={this.props.image} alt="logo"/>
                <Card.Title className="goride-title">{ this.props.title }</Card.Title>
                <Card.Text >
                    { this.props.description }
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Cards