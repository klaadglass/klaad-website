import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import React from "react"
import { ButtonPrimary } from "./buttons"
import { Container, Section } from "./layoutComponents"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4em 1fr;
  align-items: center;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
  }
`

const Text = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / -1;
  z-index: 2;
`

const ImgWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  z-index: 1;

  img {
    height: 100%;
  }
`

export default function Bio() {
  return (
    <Section>
      <Container>
        <GridWrapper className="spacing">
          <Text className="spacing">
            <h2 className="title italics bold">about KLAAD Glass Ltd.</h2>
            <p>
              KLAAD Glass Ltd. is a reliable, locally owned and operated window
              & door repair contractor servicing Calgary, AB and surrounding
              areas. With extensive residential & commercial experience, we can
              help you with all things windows and doors. Glass replacement, new
              window installation, storm doors, shower systems, mirrors,
              commercial projects, hardware fixes, caulking jobs and more! We're
              real Alberta people with real Alberta values so call us today for
              your free project estimate!
            </p>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </Text>
          <ImgWrapper>
            <StaticImage
              src="../images/about-klaad-glass-calgary-window-contractor.svg"
              alt="klaad glass calgary glass contractor"
            />
          </ImgWrapper>
        </GridWrapper>
      </Container>
    </Section>
  )
}
