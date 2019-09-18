import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

class Carousels extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>ItemItem</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}