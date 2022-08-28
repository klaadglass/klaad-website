import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

const Item = styled.div`
  text-align: center;

  .service-img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`

const ItemOther = styled.div`
  text-align: center;
  max-width: 70ch;
  width: 100%;
  margin: 0 auto;
`

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing-lg">
        <div className="spacing center">
          <h2 className="title italics caps bold">services we provide</h2>
          <p>
            We have extensive experience in{" "}
            <ButtonInline to="/services/home-window-repair-calgary">
              residential
            </ButtonInline>{" "}
            and{" "}
            <ButtonInline to="/services/commercial-window-repair-calgary">
              commercial glass replacement
            </ButtonInline>
            , repair, and installation. We are your trusted window contractor in
            Calgary!
          </p>
        </div>
        <div className="spacing-lg">
          <GridThree>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/home-window-repair-installation-calgary-service.jpeg"
                alt="home window repair & installation calgary"
              />
              <h3 className="caps bold">home window repair & installation</h3>
              <p>
                KLAAD Glass Ltd. does the big residential window repair jobs no
                one else wants to do! Large home windows & highrise window
                repair.
              </p>
              <ButtonUnderline
                className="button"
                to="/services/home-window-repair-calgary"
              >
                home window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/24-7-commercial-window-repair-calgary.jpg"
                alt="24/7 commercial window repair calgary"
              />
              <h3 className="caps bold">24/7 commercial window repair</h3>
              <p>
              Did a car drive through your window? Was your building vandalized? KLAAD Glass Ltd. offers 24/7 commercial window repair services.
              </p>
              <ButtonUnderline
                className="button"
                to="/services/commercial-window-repair-calgary"
              >
                commercial window repairs &#x2192;
              </ButtonUnderline>
            </Item>
            <Item className="spacing">
              <StaticImage
                className="service-img"
                src="../images/storm-door-installations-calgary.jpg"
                alt="new storm doors installation calgary"
              />
              <h3 className="caps bold">new storm door installations</h3>
              <p>
              Calgary's best storm doors installation & repair services! KLAAD Glass Ltd. uses top-quality storm doors for your installation and repair needs!
              </p>
              <ButtonUnderline
                className="button"
                to="/services/storm-doors-calgary"
              >
                new storm doors &#x2192;
              </ButtonUnderline>
            </Item>
          </GridThree>
          <ItemOther className="spacing">
            <h3 className="caps bold">other services</h3>
            <StaticImage
              src="../images/mirror-installation-calgary.jpg"
              alt="mirror installations and showers calgary"
              height={400}
            />

            <p>
              We provide stand alone{" "}
              <span className="bold">shower systems</span>, corner systems,
              frameless and other variations of shower glass such as obscure
              glass. We also provide{" "}
              <span className="bold">mirror installation</span> for residential
              and commercial bathrooms, gyms, and studios. We provide{" "}
              <span className="bold">specialty services</span> such as building
              envelope consultation and we{" "}
              <span className="bold">contract glass</span> for large window
              manufacturers for glass installs.
            </p>
            <ButtonUnderline className="button" to="/contact">
              contact us &#x2192;
            </ButtonUnderline>
          </ItemOther>
          <div className="center spacing">
            <h3 className="italics caps">request a service</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </div>
        </div>
      </Container>
    </Section>
  )
}
