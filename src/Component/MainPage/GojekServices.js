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
import logo9 from "../../Asset/images/iconbiru1.png"
import logo10 from "../../Asset/images/iconbiru2.png"
import logo11 from "../../Asset/images/iconbiru3.png"
import logo12 from "../../Asset/images/iconbiru4.png"
import logo13 from "../../Asset/images/iconbiru5.svg"
import logo14 from "../../Asset/images/iconkuning1.png"
import logo15 from "../../Asset/images/iconkuning2.png"
import logo16 from "../../Asset/images/iconkuning3.png"
import logo17 from "../../Asset/images/iconkuning4.png"

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
            <Cards
              image={logo7}
              title="gomed"
              description="Use GoMed all your medical needs. Buy medicines, vitamins, ect. from licensed pharmacies"
            />
            <Cards
              image={logo8}
              description="we are here to give you the easiest online shopping experience."
            />
            <Row>
              <h2>Payments</h2>
            </Row>
            <Row>
              <p>
                From split the bills to donations, we make payments reliable,
                easy and delightful for our customers and merchants alike
              </p>
            </Row>
            <Row>
              <Cards
                image={logo9}
                title="gopay"
                description="LIhat cara top up Gopay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. LIhat juga cara cek saldo Gopay di sini"
              />
              <Cards
                image={logo10}
                title="gobills"
                description="Bayar tagihan listrik, BPJS, gas, air, tv kabel, internet, beli token listrik. Tanpa antri dan bisa pakai Gopay, bayar tagihan apapun di GoBills, aja"
              />
              <Cards
                image={logo11}
                title="gopoints"
                description="Receive a token for each transaction, swipe them to earn points, and get amazing rewards."
              />
              <Cards
                image={logo12}
                title="paylater"
                description="Order any Gojek service or from any Gojek partner and pay at the end of the month with PayLater"
              />
              <Cards
                image={logo13}
                title="gopulsa"
                description="it's now easier to top up your phone credit and buy a data package with Gopulsa. Just usr Gopay in Gojek app."
              />
            </Row>
            <Row>
              <h2>Daily Needs</h2>
            </Row>
            <Row>
              <p>
                Those regular chores that call for your attenction? we have all
                products under daily needs to make your life simpler and
                hassle-free.
              </p>
            </Row>
            <Cards
              image={logo14}
              title="gomessage"
              description="Recharge your body and experience your very own version of on demand message!"
            />
            <Cards
              image={logo15}
              title="goclean"
              description="Proprize what you & leave all house-cleaning duties to GoClean!"
            />
            <Cards
              image={logo16}
              title="goauto"
              description="Order GoAuto for auto care service, towing & emergency services, anytime and anywhere. All available from the GoLife app."
            />
            <Cards
              image={logo17}
              title="goglam"
              description="with GoGlam, pamper yoursself with beauty services such as manipadei, hair cream bath or waxing, from the comfort of your own home."
            />
          </CardDeck>
        </Row>
      </Container>
    )
  }
}

export default GojekServices
