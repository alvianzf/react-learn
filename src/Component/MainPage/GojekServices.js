import React, { Component } from 'react'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import Cards from './ServiceCard/Cards'

import logo1 from '../../Asset/images/icon1.png'
import logo2 from '../../Asset/images/icon2.png'
import logo3 from "../../Asset/images/icon3.png"
import logo4 from "../../Asset/images/icon4.png"


class GojekServices extends Component {
    render() {
        return (
            <Container className="cards">
                <Row>
                    <h2>Our Services</h2>
                </Row>
                <Row>
                    <h2>Transport & Logistics</h2>
                </Row>
                <Row>
                    <p>Moving something(or someone) from point A to point B? Our Gojek drivers in green jackets and helmets save your time, and energy.</p>
                </Row>
                <Row>
                    <CardDeck>
                    <Cards  image={ logo1 } title="GoRide" description="Over 2 million drivers nationwide are ready to drive you safely through the traffic."/>
                    <Cards image={ logo2 } title="gocar" description="Hundreds of thousands of drivers to drive you safely with comfort and convenience." />
                    <Cards image={ logo3 } title="gosend" description="Fast, reliable, and convenient delievery service for your daily needs. Order GoSend now!" />
                    <Cards image={ logo4 } title="gobox" description="Moving or sending bulky items is now easy and convenient with GoBox" />
                    </CardDeck>
                </Row>
               
                
            </Container>
        )
    }
}

export default GojekServices

