import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import Slider01 from '../../Asset/images/slider01.png'
import Slider02 from '../../Asset/images/slider02.png'
import Slider03 from '../../Asset/images/slider03.png'
class Carousels extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="card-image" alt="item1" src={Slider01} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="card-image" alt="item1" src={Slider02} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="card-image" alt="item1" src={Slider03} />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Carousels