import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

export default function StormGallery() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold italics center">
          Storm Door Installations and Repairs
        </h2>
        <GridThree>
          <StaticImage
            className="stretch"
            src="../images/storm-doors/calgary-ab-storm-door.jpeg"
            alt="storm door installations calgary"
          />
          <StaticImage
            className="stretch"
            src="../images/storm-doors/calgary-storm-door-installation.jpeg"
            alt="storm door installations calgary"
          />
          <StaticImage
            className="stretch"
            src="../images/storm-doors/calgary-storm-door.jpeg"
            alt="storm door installations calgary"
          />
          <StaticImage
            className="stretch"
            src="../images/storm-doors/storm-door-installer.jpeg"
            alt="storm door installations calgary"
          />
          <StaticImage
            className="stretch"
            src="../images/storm-doors/storm-doors-in-calgary.jpeg"
            alt="storm door installations calgary"
          />
          {/* <StaticImage
            className="stretch"
            src="../images/gallery/door-installation-and-repairs-gallery-2.jpg"
            alt="door repair job calgary"
          /> */}
        </GridThree>
        <div className="center spacing">
          <h3 className="italics caps">request a service</h3>
          <p>
            Call us at{" "}
            <AnchorInline href="tel: 403-272-8932">403-272-8932</AnchorInline>{" "}
            or fill out our contact form to reuest a service or free estimate
            for us!
          </p>
          <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
