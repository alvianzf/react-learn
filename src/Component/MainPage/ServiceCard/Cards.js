import React, { Component } from "react"
import { Card, Button } from "react-bootstrap"

class Cards extends Component {
  render() {
    return (
      <Button variant="white">
          <Card
            className="box"
            bg="white"
            style={{ height: "18rem", width: "19rem" }}
          >
            <Card.Body className="image-center">
              <img src={this.props.image} alt="logo" />
              <Card.Title className="goride-title">
                <h3>
                  <b>{this.props.title}</b>
                </h3>
              </Card.Title>
              <Card.Text className="article">{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
      </Button>
    )
  }
}

export default Cards
