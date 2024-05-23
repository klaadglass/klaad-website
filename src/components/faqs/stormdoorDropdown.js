import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline, AnchorPrimary } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"

const device = {
  md: "48em",
}

const AccordionWrapper = styled.div`
  border-bottom: ${({ item }) =>
    item ? "none" : "1px solid var(--clr-accent)"};
`

const TitleFlex = styled.div`
  padding: var(--spacer-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ item }) => (item ? "4px solid #9ecaed" : "none")};

  &:hover {
    cursor: pointer;
    background: var(--clr-light-secondary);
    transition: 0.25s ease-in;
  }
`

const Text = styled.div`
  align-self: start;
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};
`

const ArrowImg = styled.img`
  width: 25px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

const Spacer = styled.div`
  margin-bottom: var(--spacer);
`

const AccordionItem = props => {
  const [item, itemOpen] = useState(false)

  function toggleItem() {
    itemOpen(!item)
  }
  return (
    <AccordionWrapper item={item}>
      <TitleFlex item={item} onClick={toggleItem}>
        <p className="bold">{props.question}</p>
        <ArrowImg item={item} src={ArrowDown} alt="" />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <p>{props.answer}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function StormdoorDropdown() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          More information about our Calgary storm door selection
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="Steel Storm Doors Calgary"
              answer="Known for their durability and strength, steel storm doors are an excellent choice for enhancing security and withstanding Calgary's varying weather conditions. These doors provide robust protection against wind, rain, and snow, ensuring your home remains safe and secure."
            />
            <AccordionItem
              question="Storm Door Hinge Side Z Bar"
              answer="This feature adds extra stability to your storm door, preventing warping and ensuring a tight seal against drafts. It's a crucial component for maintaining the efficiency and longevity of your storm door, especially in Calgary's fluctuating temperatures."
            />
            <AccordionItem
              question="Insulated Storm Doors Calgary"
              answer="For superior energy efficiency, insulated storm doors are the best choice. These doors feature added insulation to keep your home warm in the winter and cool in the summer, reducing energy costs and enhancing comfort."
            />
          </div>
          <p >At KLAAD Glass, we understand that Calgary's climate demands high-quality storm doors that can withstand extreme weather conditions. Whether you need a full-view, half-view, sliding, steel, or insulated storm door, we have the expertise to help you choose the right option and ensure professional installation. Our team is also equipped to handle repairs and replacements, ensuring your storm doors remain in top condition year-round. Contact us today to learn more about our storm door options and how we can help protect and enhance your home.</p>
        </Flex>
        <center>
        <AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary></center>
      </Container>
    </Section>
  )
}
