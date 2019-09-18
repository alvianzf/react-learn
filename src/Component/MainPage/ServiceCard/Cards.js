import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import icon1 from "./../../../Asset/images/icon1.png"

class Cards extends Component {
    

    render() {

        return (
            <Card className="box" bg="white" style={{ width: '18rem' }}>
                <Card.Body className="image-center">
                    <img src={this.props.image} alt="logo"/>
                <Card.Title className="goride-title"><h3>{ this.props.title }</h3></Card.Title>
                <Card.Text className="article">
                    { this.props.description }
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Cards