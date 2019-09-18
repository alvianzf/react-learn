import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

import Hero from '../Asset/images/slider.png'
import Carousels from './MainPage/Carousels'

import Solv from './MainPage/Solve'
import GojekServices from './MainPage/GojekServices'

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <img alt="hero" src={ Hero } />
                </Row>
                <Row>
                    <Solv />
                </Row>
                <Row>
                    <Carousels />
                </Row>
                <Row>
                    <GojekServices />
                </Row>
            </Container>
        )
    }
}

export default Home