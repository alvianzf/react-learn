import React, { Component } from "react"
import { Container, Row, CardDeck } from "react-bootstrap"
import Cards from "./ServiceCard/Cards"

import logo1 from "../../Asset/images/icon1.png"
import logo2 from "../../Asset/images/icon2.png"
import logo3 from "../../Asset/images/icon3.png"
import logo4 from "../../Asset/images/icon4.png"
import logo5 from "../../Asset/images/iconmerah1.png"
import logo6 from "../../Asset/images/iconmerah2.png"
import logo7 from "../../Asset/images/iconmerah3.png"
import logo8 from "../../Asset/images/iconmerah4.svg"

class GojekServices extends Component {
  render() {
    return (
      <Container className="cards">
        <Row>
          <h2>Our Services</h2>
        </Row>
        <Row>
          <h3>Transport & Logistics</h3>
        </Row>
        <Row>
          <p>
            Moving something(or someone) from point A to point B? Our Gojek
            drivers in green jackets and helmets save your time, and energy.
          </p>
        </Row>
        <Row>
          <CardDeck>
            <Cards
              image={logo1}
              title="GoRide"
              description="Over 2 million drivers nationwide are ready to drive you safely through the traffic."
              />
            <Cards
              image={logo2}
              title="gocar"
              description="Hundreds of thousands of drivers to drive you safely with comfort and convenience."
              />
            <Cards
              image={logo3}
              title="gosend"
              description="Fast, reliable, and convenient delievery service for your daily needs. Order GoSend now!"
            />
            <Cards
              image={logo4}
              title="gobox"
              description="Moving or sending bulky items is now easy and convenient with GoBox"
            />
          </CardDeck>
        </Row>
        <br />
        <Row>
          <h3>Food & FMCG</h3>
        </Row>
        <br />
        <Row>
          <p>
            Order food from a whole lotta restaurants, get medicines delivered
            in a jiffy, or fill your shopping cart from many a mart
          </p>
        </Row>
        <Row>
          <CardDeck>
            <Cards
              image={logo5}
              title="gofood"
              description="The largest food delievery in Indonesia and Southeast Asia"
            />
            <Cards
              image={logo6}
              description="Enjoy a variety of favorite cuisine consisting foods, beverage. traditional snacks, trending snacks & exciting events at the GoFood Culinary Festival."
            />
            <Cards image={logo7} title="gomed" description="Use GoMed all your medical needs. Buy medicines, vitamins, ect. from licensed pharmacies" />
            <Cards image={logo8} description="we are here to give you the easiest online shopping experience." />
          </CardDeck>
        </Row>
      </Container>
    )
  }
}

export default GojekServices
