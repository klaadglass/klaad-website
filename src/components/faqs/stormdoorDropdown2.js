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

export default function StormdoorDropdown2() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          What does a Calgary storm door do?
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="Weather Protection"
              answer="Calgary's weather can be unpredictable, with sudden changes and extreme conditions. A storm door helps shield your main door from rain, snow, and ice, preventing water damage and prolonging the lifespan of your entrance door. During winter, a storm door acts as a buffer against the cold, reducing drafts and keeping your home warmer."
            />
            <AccordionItem
              question="Energy Efficiency"
              answer="With Calgary's cold winters and hot summers, maintaining a consistent indoor temperature can be challenging. A storm door adds an extra layer of insulation, helping to keep the cold out in the winter and the heat out in the summer. This improved insulation can lead to significant savings on your energy bills by reducing the need for heating and cooling."
            />
            <AccordionItem
              question="Security Enhancement"
              answer="Storm doors provide an additional barrier to entry, making it more difficult for intruders to access your home. Many storm doors come with sturdy locks and reinforced frames, offering an extra level of security without sacrificing aesthetics or ventilation."
            />
            <AccordionItem
              question="Ventilation and Airflow"
              answer="On pleasant summer days, a storm door allows you to open your main door while keeping the storm door closed. This setup lets fresh air circulate through your home while keeping insects and debris out. The ability to ventilate your home without compromising security is particularly beneficial during Calgary's warmer months."
            />
            <AccordionItem
              question="Curb Appeal"
              answer="A well-chosen storm door can enhance the appearance of your home. With various styles, colors, and materials available, you can find a storm door that complements your home's exterior. This not only improves the look of your home but can also increase its value."
            />
            <AccordionItem
              question="Noise Reduction"
              answer="Living in a bustling city like Calgary, noise can be a concern. A storm door adds an additional layer of soundproofing, helping to reduce the amount of outside noise that enters your home, creating a quieter and more peaceful living environment."
            />
            <AccordionItem
              question="Curb Appeal"
              answer=""
            />
          </div>
          <p >Whether you're looking to improve the security of your home, enhance its energy efficiency, or simply reduce your energy bills, a storm door is a great option. At KLAAD Glass, we offer a wide range of storm doors tailored to meet the specific needs of Calgary residents. Our professional installation ensures that your storm door performs effectively, providing you with the protection and benefits you need.</p>
        </Flex>
        <center>
        <AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary></center>
      </Container>
    </Section>
  )
}
