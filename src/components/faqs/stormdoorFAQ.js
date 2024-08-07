import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

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

export default function StormdoorFAQ() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          Get your questions answered by our{" "}
          <span className="accent">storm door experts!</span>
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="How much does a Calgary storm door cost?"
              answer="On average, a Calgary storm door cost between $250 and $700, depending on options and color, and does not include the installation. Generally, standard white doors are far less expensive than doors colored to match your home. There are also many handle and locking/keyed options too, and can add to the final cost of the door so ensure you have all the information when making your choice. That is where KLAAD Glass Calgary can help!! When choosing a Calgary storm door, it is important to consider all of these factors to get an accurate estimate of the cost for your storm door, to ensure you get the right door for your home. Contact us today to get an estimate."
            />
            <AccordionItem
              question="How do you install a storm door?
              "
              answer="Because storm doors are typically made of glass or metal, they can be a bit tricky to install. The first step is to measure the door opening and then cut the storm door to size. Next, use a drill to make holes for the handles and hinges. Once the holes are drilled, it's time to attach the storm door to the frame. Begin by attaching the hinges, and then secure the door in place with screws or bolts. Finally, install the handle and any other hardware, such as a latch or deadbolt. With these simple steps, you'll have your Calgary storm door installed in no time. Now if that seems simple, it is!!!! BUT, sometimes a storm door needs some special modifications to make it perfect, and that's where KLAAD Glass can help. If you need assistance with a storm door selection, or repairs or a complicated installation, contact KLAAD Glass TODAY!"
            />
            <AccordionItem
              question="Do storm doors add value to your home?"
              answer="Any homeowner knows that the key to a comfortable home is making sure it is well insulated. In winter, you want to keep the warm air in and the cold air out. In summer, you want to keep the cool air in and the hot air out. Storm doors are an excellent way to add an extra layer of protection to your home, keeping it more comfortable year-round. Not only do storm doors help to regulate temperature, but they also provide an extra level of security. In addition, storm doors can be a great way to add curb appeal to your home and show your commitment to a well maintained and cared for home. Calgary is known for it's extreme weather conditions, so a storm door can be a valuable investment for any homeowner. When it comes to adding value to your home, storm doors are a wise choice. Click our FREE ESTIMATE link and learn how KLAAD Glass Calgary can help!!"
            />
            <AccordionItem
              question="What makes KLAAD Glass different from other storm door installation companies in Calgary?"
              answer="At KLAAD Glass, we pride ourselves on our exceptional customer service, high-quality products, and extensive experience in the industry. With over 25 years of serving Calgary residents, our team of skilled professionals ensures precise and efficient installation every time. We offer a wide variety of storm door styles and features, allowing you to choose the perfect fit for your home. Additionally, our commitment to using top-quality materials means your storm door will be durable and long-lasting. We also provide comprehensive repair and maintenance services, ensuring your storm door continues to perform optimally throughout the years."
            />
            <AccordionItem
              question="How long does the storm door installation process take?"
              answer="The installation process for a storm door typically takes a few hours, depending on the complexity of the project and the specific type of storm door you choose. Our team at KLAAD Glass is dedicated to providing efficient and hassle-free service. We begin with a thorough consultation to understand your needs and preferences, followed by precise measurements and customization if required. On the installation day, our technicians will arrive on time, equipped with all necessary tools and materials, and complete the installation with minimal disruption to your daily routine. We strive to ensure that the entire process is smooth and satisfactory from start to finish."
            />
            <AccordionItem
              question="Do you offer any warranties or guarantees on your storm doors and installation services?"
              answer="Yes, at KLAAD Glass, we stand behind the quality of our products and services. We offer comprehensive warranties on our storm doors, covering any manufacturing defects and ensuring long-term durability. Additionally, our installation services come with a satisfaction guarantee. If you encounter any issues with your storm door installation, our team will promptly address and resolve them to your satisfaction. Our goal is to provide you with peace of mind and confidence in your investment, knowing that your home is protected by a high-quality storm door installed by experienced professionals."
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
