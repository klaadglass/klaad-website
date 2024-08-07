import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import {
  AnchorInline,
  ButtonInline,
  ButtonUnderline,
  ButtonPrimary,
  AnchorPrimary,
} from "../../components/buttons"
import CTA from "../../components/CTA"
import Layout from "../../components/layout"
import {
  GridThree,
  Section,
  Container,
  Flex,
  FlexMobileOpp,
} from "../../components/layoutComponents"
import AllReviews from "../../components/reviews"
import ServicePage from "../../components/servicePage"
import FormContact from "../../components/forms/formContact"

import BannerImg from "../../images/storm-door-installations-calgary.jpg"
import MainImg from "../../images/storm-doors-calgary-retractable-door-with-customer.png"
import styled from "styled-components"
import StormdoorFAQ from "../../components/faqs/stormdoorFAQ"
import SEO from "../../components/seo"
import Alert from "../../components/alert"
import StormdoorDropdown from "../../components/faqs/stormdoorDropdown"
import StormdoorDropdown2 from "../../components/faqs/stormdoorDropdown2"
import StormGallery from "../../components/stormGallery"

const ContentWrapper = styled.div`
  h2,
  p {
    max-width: 70ch;
    width: 100%;
  }
`

const Wrapper = styled.div`
  position: relative;
`

export default function StormDoorsCalgary() {
  return (
    <Wrapper>
      <Layout>
        <SEO
          title="Storm Doors Calgary Installation Services - KLAAD Glass Ltd."
          description="Calgary's best storm doors installation & repair services! KLAAD Glass Ltd. uses top-quality storm doors for your installation and repair needs! 403-272-8932"
        />
        <BannerSecondary
          to1="/"
          link1="home"
          to2="/services"
          link2="services"
          to3="/services/storm-doors-calgary"
          link3="storm doors calgary"
          title="Storm Door installation & repair services in Calgary"
          description="Calgary's best storm doors installation & repair services! KLAAD Glass Ltd. uses top-quality storm doors for your installation and repair needs! Enhance your home's energy efficiency and curb appeal with Calgary's storm door installations and repairs."
          img={BannerImg}
          alt="Storm Door installation & repair services in Calgary"
        />
        <ServicePage
          title="new storm doors calgary"
          subtitle="we supply and install new storm doors, and we provide storm door maintenance & repair services"
          mainContent="Our storm doors installation service is the perfect way to protect your home from weather storms while increasing security from potential intruders. Storm doors Calgary are designed to withstand high winds and keep out precipitation, making them an essential part of any home's exterior. Our team of experienced professionals will ensure that your storm door is installed correctly, so you can rest assured that your home is safe from the weather. In addition, we offer a wide variety of storm door styles and colors to choose from, so you can find the perfect match for your home's aesthetic. Contact us today to schedule a consultation and see how our storm door installation service can benefit you. We also offer storm door repair and replacement services in Calgary and have been doing so for over 25 years! If your storm door is damaged or needs to be replaced, we can help. We offer a wide variety of storm doors to choose from and can custom build a storm door to your exact specifications."
          mainImg={MainImg}
          mainAlt="storm doors calgary"
        />
        <Section>
          <Container>
            <div className="center spacing">
              <h3 className="italics title bold caps">
                request a storm door repair or installation service
              </h3>
              <p>
                We understand that a well-installed storm door not only provides an extra layer of protection but also helps to reduce energy costs by adding insulation. Our storm doors are engineered to keep your home warm during Calgary's chilly winters and cool during the hot summer months.
              
              Our comprehensive selection of storm doors includes options with features such as tempered glass, retractable screens, and heavy-duty frames, ensuring you get the best in durability and functionality. Whether you prefer a classic design or a modern look, our collection has something to suit every style.
              We pride ourselves on our exceptional customer service and craftsmanship. Each installation is handled with precision and care, guaranteeing that your storm door not only looks great but performs flawlessly. Our experienced technicians are trained to handle even the most challenging installations, ensuring a perfect fit and finish every time.
              In addition to installation, we offer reliable maintenance services to keep your storm doors in top condition. Regular maintenance can extend the life of your storm door, ensuring it continues to protect your home for years to come. If you're experiencing issues such as squeaky hinges, misaligned frames, or broken glass, our repair team is here to help.
              For those looking to upgrade their current storm doors, we provide a seamless replacement service. We'll help you select the ideal storm door with screen or storm entry door to meet your needs and install it with minimal disruption to your daily routine. Our commitment to quality and customer satisfaction has made us a trusted name in Calgary for over 25 years.


              Discover the benefits of professionally installed storm doors Canada today. Contact KLAAD Glass for a consultation and let us help you enhance your home's protection, efficiency, and beauty.
</p>

              <p className="subheader">
                
                <a href="/images/klaad-glass-storm-door-brochure.pdf" download>Download the KLAAD Glass Storm Door Brochure
</a>
                </p>
              <p>
                Call us at{" "}
                <AnchorInline href="tel: 403-272-8932">
                  403-272-8932
                </AnchorInline>{" "}
                or fill out our contact form to reuest a service or free
                estimate for us!
              </p>
              <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
            </div>
          </Container>
        </Section>
        <AllReviews />
        <Section>
          <ContentWrapper>
            <Container className="spacing-lg">
              <Flex>
                <div className="spacing">
                  <h2 className="title bold italics">Types of storm doors in Calgary, AB</h2>
                  <p>
                    There are a few different types of storm doors available on
                    the market, each with their own benefits. The most popular
                    type of storm door is the full-view storm door, which offers
                    a clear view of the outdoors while still providing
                    protection from the elements. These doors are typically made
                    of glass or clear plastic, and they can be installed on any
                    type of door. Another type of storm door is the half-view
                    storm door, which offers a partially obstructed view of the
                    outdoors. These doors are typically made of wood or metal,
                    and they can be a great option for doors that are located in
                    high-traffic areas. There are also sliding storm doors,
                    which offer a full view of the outdoors and are typically
                    used for rear home entrances. Other types of storm doors we
                    can help repair, replace, and install are:
                  </p>
                  <ul>
                    <li>Steel storm door Calgary</li>
                    <li>Storm door hinge side z bar</li>
                    <li>Insulated storm doors Calgary</li>
                  </ul>
                  <p>As you can see, there are a few different types of storm doors available on the market, each with their own benefits. The most popular type of storm door is the full-view storm door, which offers a clear view of the outdoors while still providing protection from the elements. These doors are typically made of glass or clear plastic, and they can be installed on any type of door. Full-view storm doors are perfect for enjoying Calgary's beautiful landscapes while keeping your home insulated against harsh weather conditions.</p>
                  <p>Another popular type of Calgary storm door is the half-view storm door, which offers a partially obstructed view of the outdoors. These doors are typically made of wood or metal and can be a great option for doors located in high-traffic areas. Half-view storm doors provide a balance between visibility and privacy, making them ideal for busy households.

</p>
                  <AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary>
                </div>
                <StaticImage
                  src="../../images/storm-doors-calgary-types.png"
                  alt="types of storm doors calgary"
                  className="stretch"
                />
              </Flex>
              <StormdoorDropdown />
              <FlexMobileOpp>
                <StaticImage
                  src="../../images/what-is-a-storm-door-calgary.jpeg"
                  alt="what is a storm door calgary"
                  className="stretch"
                />
                <div className="spacing">
                  <h2 className="title bold italics">What is a Calgary storm door?</h2>
                  <p>
                    A storm door is an additional layer of protection for an
                    entrance door. Storm doors usually have a glass panel that
                    can be opened and closed to allow airflow into your home,
                    but also offer an excellent level of weather protection and
                    security in Calgary. Storm doors are installed in front of a
                    residential entrance door and will help in reducing drafts,
                    precipitation build up against the main door and reduce
                    energy costs. Storm doors can also provide an extra layer of
                    security by creating a glass barrier while still allowing
                    airflow on those hot summer days and evenings. Storm doors
                    in Calgary have many benefits from not only improving the
                    look of your home, but improving it's energy efficiency too.
                    Whether you're looking to improve the security of your home
                    or simply want to reduce your energy bills, a storm door is
                    a great option.
                  </p>
                  <AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary>
                </div>
              </FlexMobileOpp>
              <StormdoorDropdown2 />
              <Flex>
                <div className="spacing">
                  <h2 className="title bold italics">
                    Storm & screen doors calgary
                  </h2>
                  <p>
                    Retractable screen doors Calgary have become a popular
                    option to getting more airflow into your home. Retractable
                    screen doors roll up into a small vertical housing on your
                    entrance door and are simply “rolled out” across the door
                    opening when needed. Their advantage is an unobstructed view
                    and airflow into the home as it contains no glass, just
                    screen mesh. These types of screen doors don't have the
                    security advantages of storm doors in Calgary, but they do
                    the trick when security or weather protection are not your
                    primary goals, but airflow is!! If you're looking for a
                    high-quality retractable screen door, KLAAD Glass can help
                    you choose the best fit for your home, and we can even help
                    with the installation as well. Contact us today!
                  </p>

                  <AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary>
                </div>
                <StaticImage
                  src="../../images/storm-and-screen-doors-calgary.png"
                  alt="storm and screen doors calgary"
                  className="stretch"
                />
              </Flex>
            </Container>
          </ContentWrapper>
        </Section>
        <StormdoorFAQ />
        <CTA
          subtitle="need a storm door installed or repaired?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
        />
        <StormGallery />
        <Section>
          <center>
            <ContentWrapper>
              <Container className="spacing" >
            <h2>Get your Calgary storm doors installed by KLAAD Glass!</h2>
            <p >At KLAAD Glass, we're dedicated to providing top-quality storm doors in Calgary. With over 25 years of experience, we understand the unique needs of Calgarians when it comes to protecting their homes. Our wide selection of storm doors, crafted from durable materials, ensures resilience against Calgary's harsh weather conditions.

What sets us apart is our commitment to customer satisfaction. From consultation to installation, we prioritize your needs, offering personalized solutions tailored to your home. Our expertise ensures we find the perfect storm door to enhance your home's security, energy efficiency, and curb appeal.

We provide transparent pricing, prompt installations, and comprehensive warranties to ensure your peace of mind. Choose KLAAD Glass for superior storm door installations in Calgary.</p><AnchorPrimary href="tel: 403-272-8932">
                  Call Us: 403-272-8932
                </AnchorPrimary></Container></ContentWrapper></center>
          
        </Section>
        <FormContact title="get free estimate on your storm door install or repair" />
      </Layout>
    </Wrapper>
  )
}
