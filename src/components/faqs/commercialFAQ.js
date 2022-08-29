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

export default function CommercialFAQ() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          Get your questions answered by our{" "}
          <span className="accent">commercial window experts!</span>
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="How much do commercial glass windows cost?"
              answer="Commercial windows cost Calgary varies depending on the size, style and number of windows needed. Local building codes are also always a factor. Specialized labour and commercial window installation costs can also impact the final price. To get an accurate estimate, it's best to consult with your commercial glass window company. However, as a general guide, commercial glass windows can cost anywhere from $1000 to $5,000 per window installed. For smaller businesses, the cost may be on the lower end of this range, while larger businesses or those with more complex window designs may need to budget for the higher end. Ultimately, the final cost will depend on the specific needs of your business. Get in touch with us today for an estimate on your office or storefront windows!
              "
            />
            <AccordionItem
              question="How often should commercial windows be replaced?
              "
              answer="Commercial windows tend to show a useful lifespan of 10-15 years in Calgary, not accounting for damage by vandalizum or accident. However, many commercial buildings have windows that are much older than this. If your commercial building has older windows, you may be wondering if it's time to replace them. Commercial window and building envelope systems are very important considerations when you are evaluating your project. Older windows are often less energy efficient than newer ones due to their age but also due to the construction practices and standards of the day they were constructed. Older systems can lead to higher energy bills and a significant loss of heat or air conditioning in the summer and winter months in Calgary. Additionally, think about the security of the windows. If security is a concern, then it's definitely time for inspection or potentially commercial window replacement Calgary. If you're still not sure whether or not to replace your commercial windows, consult with a professional window installation company, like KLAAD Glass. At KLAAD Glass, we will be able to assess the condition of your windows and give you expert advice on what the next step should be."
            />
            <AccordionItem
              question="How do you install a commercial window?"
              answer="Installing a commercial window is a complex process that should only be undertaken by experienced professionals. At KLAAD Glass, our experienced team of Journeymen can offer commercial window installation Calgary and we’ve been doing it for decades. Due to the age of our city and the various products and methods used over the years, Calgary commercial windows vary extensively and require a professional touch, or even specialized tools to complete the project. Commercial window installation in Calgary is a complex process that requires specialized skills and knowledge. Contact us today for an estimate."
            />
          </div>
          <div>
            <AccordionItem
              question="What type of glass is used for storefronts?"
              answer="Storefronts are an essential part of any commercial building, as they provide a clear view of the interior and can help to attract customers. The type of glass used in a storefront is important not only for aesthetic reasons, but also for safety and security. Local building codes are a factor for getting the correct type of glass but thick, tempered glass, or laminated glass are popular choices for storefronts and commercial projects due to it's safety. Tempered or laminated glass in 6mm or greater thickness is much less likely to break than standard glass. In the event that tempered glass does break, it will shatter into small, harmless pieces rather than large, dangerous shards. Laminated glass is made by bonding two or more layers of glass together with a plastic interlayer. This type of glass is very strong and resistant to breakage, making it an ideal choice for high-traffic areas. If you are in need of commercial glass repair Calgary, contact us today for an estimate!"
            />
            <AccordionItem
              question="What is storefront glazing?"
              answer="Storefront glazing is a type of glass that is often used in commercial settings. It is typically made from tempered or laminated safety glass, which is designed to resist breakage. Storefront glazing can be clear or tinted, and it is often used in combination with other materials such as aluminum. Storefront glazing is a popular choice for storefronts because it is durable and provides a clear view of the store interior. In addition, storefront glazing can be customized to meet the specific needs of a business. For example, some businesses may choose to use frosted glass to provide privacy for customers or employees. Others may use tinted glass to reduce glare from sunlight. Storefront glazing is an important consideration for any business that wants to create a professional and inviting storefront. If you need storefront glazing in Calgary, contact KLAAD Glass today!"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
