import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import {
  AnchorInline,
  ButtonInline,
  ButtonUnderline,
  ButtonPrimary,
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

import BannerImg from "../../images/best-home-window-repair-services-calgary.jpg"
import MainImg from "../../images/home-window-repair-calgary.jpg"
import styled from "styled-components"
import ResidentialFAQ from "../../components/faqs/residentialFAQ"
import SEO from "../../components/seo"

const ContentWrapper = styled.div`
  h2,
  p {
    max-width: 70ch;
    width: 100%;
  }
`

export default function HomeWindowRepair() {
  return (
    <Layout>
      <SEO
        title="Home Window Repair Calgary, AB - Window Repairs, Replacements & Installation"
        description="KLAAD Glass Ltd. does the big residential window repair jobs no one else wants to do!  Large home & high-rise window repair Calgary! Call 403-272-8932."
      />
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/home-window-repair-calgary"
        link3="home window repair calgary"
        title="best home window repair services in calgary - we fix large windows!"
        description="KLAAD Glass Ltd. does the big residential Calgary home window repair jobs no one else wants to do! Large home & highrise window repairs, replacements, and installations in Calgary!"
        img={BannerImg}
        alt="best home window repair calgary, ab"
      />
      <ServicePage
        title="home window repair calgary, AB"
        subtitle="calgary's trusted window repair and replacement company"
        mainContent="Home window repair and replacement is a common need in Calgary. There are many reasons why windows may become damaged and need to be replaced. The most common cause of window damage in Calgary is severe weather, damage caused by others, or they have simply outlasted their service life. We know Calgary's weather can produce the high winds that can break glass, or the  hail that can cause cracks or chips or even outright breakage to the degree of weather penetration... very serious problems indeed!! These issues and others we haven't even mentioned means it is important to have a go-to home window repair Calgary company for your home or business that can also help when hail damage or other repairs are needed. Even common occurrences like our extreme cold can cause glass to become brittle and break or even “fail” and loose their insulating capacity. Hockey pucks, sling shots, baseball games, not so good golf shots or other debris can cause unexpected window and glass damage, as unintentional as they may be. If you have damage to your windows, it is important to contact your reputable Calgary window repair contractor as soon as possible. At KLAAD Glass, we will be able to assess the damage and recommend the best course of action. In some cases, the damage may be minor and a little TLC or home window replacement Calgary is all that is needed. However, if the damage is extensive, we are the people to talk to. Regardless of the extent of the damage, it is important to have it addressed as soon as possible to avoid further damage to your home."
        mainImg={MainImg}
        mainAlt="home window repair in calgary, ab"
      />

      <Section>
        <Container>
          <div className="center spacing">
            <h3 className="italics title bold caps">
              A General Approach to Calgary Home Window Repair Services
            </h3>
            <p>At KLAAD Glass, we take pride in being the go-to experts for window repair Calgary residents trust. Our friendly, laid-back yet professional team is dedicated to providing top-notch window repair and replacement services, ensuring your home stays cozy and secure. Whether you're dealing with cracked glass, foggy panes, or worn-out seals, we've got you covered.

As proud Calgarians, we understand the unique challenges that Alberta's climate can bring. From icy winters to sunny summers, our expert team ensures your windows are in perfect condition year-round. No shortcuts, just quality work from a local team that treats every home as if it were our own.
              Call us at{" "}
              <AnchorInline href="tel: 403-272-8932">403-272-8932</AnchorInline>{" "}
              or fill out our contact form to reuest a service or free estimate
              for us!
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
                <h2 className="title bold italics">
                  Calgary’s Experts in large home window repairs
                </h2>
                <div>
                  <h3 className="subheader bold italics caps">general Calgary window repairs and replacement services</h3>
                <p>
                  At KLAAD Glass, we've seen the evolution of the modern home!!
                  It used to be single story homes with regular glass sizes, but
                  now-a-days those houses have gotten a lot bigger!! Extra large
                  triple pane windows are now very common and sometimes they
                  require a special type of approach based on their size and
                  placement in the home. Window problems three stories up in
                  your dream home?? No problem for KLAAD Glass as we specialize
                  in these large home window repairs, or even high-rise window
                  repairs. No job is too big or too small for our team of
                  experienced professionals. We understand the unique challenges
                  that come with working on large windows, and we have the
                  skills and expertise to get the job done right. We also offer
                  a wide range of custom glass Calgary options to suit your
                  specific needs and large window sizes. Whether you need
                  quality window installation Calgary services, or general
                  window repairs to your existing windows, we can help. Contact
                  us today to schedule a consultation.
                </p>
                </div>
                
                <div>
                  <h3 className="subheader bold italics caps">Broken glass repairs Calgary</h3>
                  <p>Accidents happen, but broken windows don't have to be a permanent problem. At KLAAD Glass, we offer quick and efficient glass repair in Calgary. Our team can handle everything from minor chips to major cracks, ensuring your home remains safe and secure. We use high-quality materials to match your existing windows, providing seamless repairs.</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Leaking Window Repair Calgary</h3>
                  <p>Leaky windows can lead to water damage and increased energy bills. Our Calgary window repair services include thorough inspections and repairs to seal any leaks. Whether it's replacing weatherstripping, re-caulking, or fixing structural issues, we've got the expertise to keep your home dry and comfortable.

</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Recaulking and Caulking Services Calgary</h3>
                  <p>Proper caulking is essential for preventing drafts and moisture intrusion. Our window repair for homes includes expert recaulking and caulking services. We'll ensure your windows are properly sealed, enhancing energy efficiency and comfort. Our meticulous approach guarantees long-lasting results, no matter the weather.
</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Casement Handle Replacements
</h3>
                  <p>A faulty casement handle can make opening and closing your windows a hassle. At KLAAD Glass, we offer casement handle replacements as part of our window mechanism repairs. Our friendly team will have your windows operating smoothly again, so you can enjoy fresh air with ease.

</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Window Mechanism Repairs and Replacements
</h3>
                  <p>From stuck sashes to broken locks, window mechanisms can cause a variety of issues. Our window repair services in Calgary include comprehensive mechanism repairs and replacements. We'll diagnose the problem and provide a solution that restores full functionality to your windows.

</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Calgary Door Hardware Repairs and Replacements
</h3>
                  <p>Your doors deserve just as much attention as your windows. KLAAD Glass offers door hardware repairs and replacements, ensuring your home is secure and accessible. Whether it's a front door or a patio door, we handle everything from hinges to locks with the same care and precision.

</p>
                </div>
                <div>
                  <h3 className="subheader bold italics caps">Calgary window lock repairs</h3>
                  <p>Security is a top priority, and a faulty window lock can compromise your home's safety. Our window lock repair services in Calgary ensure that your locks are in perfect working order. We'll fix or replace any faulty components, providing peace of mind and enhanced security.

</p>
                </div>
                <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
              </div>
              <StaticImage
                src="../../images/large-home-window-installation-calgary.jpeg"
                alt="large home window installation calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/home-window-repair-cost-calgary.jpg"
                alt="residential window repair cost calgary"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">Window repair costs Calgary</h2>
                <p>
                  Residential window replacement cost Calgary can vary depending
                  on a number of factors, such as the size and style of the
                  window, the type of glass, and even the frame material. With
                  the cost of raw materials changing seemingly daily, it is even
                  more important to click on our FREE ESTIMATE link if you have
                  a problem. We can come to you at a time that best suites YOUR
                  schedule and help you access the REAL COSTS, in their
                  entirety, with no surprises. We're home owners too, and we
                  hate surprises. When considering the cost of window
                  replacement, it is important to factor in ALL the costs and be
                  confident that your window costs will be as quoted, and NEVER
                  any more. At KLAAD Glass we will include window supply cost,
                  window installation cost, all materials costs and even getting
                  rid of your old windows, all included in one quote, just so
                  you will know the full price upfront without any hidden
                  charges. Let's be perfectly upfront... overall, the cost of
                  residential window replacement can range from a few hundred
                  dollars to several thousand, depending on the scope of the
                  project. We can help you find a quality window at a price that
                  fits your budget.
                </p>
                <div>
                  <h3 className="subheader bold italics ca">How to Fix a Broken Window Without Replacing It</h3>
                  <p>Fixing a broken window doesn't always mean a full replacement. At KLAAD Glass, we offer expert repairs for cracked or damaged windows, including innovative techniques to preserve your existing window's integrity. This approach not only saves you money but also ensures your home remains secure and insulated.</p>
                </div>
                <div>
                  <h3 className="subheader bold italics ca">Broken Double-Pane Window Costs</h3>
                  <p>Double-pane windows provide enhanced insulation, but when they break, costs can vary. Our Calgary window repair services cover everything from minor repairs to full replacements, ensuring your double-pane windows regain their efficiency and clarity without breaking the bank.</p>
                </div>
                
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Have moisture and fog in your Calgary home windows?
                </h2>
                <p>
                  We can help with that! If you have ever noticed moisture or
                  fog in your home windows, you are not alone. This is a common
                  problem that is not confined to older homes. New homes can
                  experience “failures” that allow regular moisture in the air
                  to penetrate the window cavity and build up a “fog” that ruins
                  your view, and decreases your home's efficiency, costing you
                  money from heat loss. Our colder climate and extreme
                  temperature swings we experience in Calgary can really add to
                  this problem. If you can not seem to clean your windows no
                  matter how hard you try, the culprit is probably moisture in
                  the glass. The good news is that we at KLAAD Glass fix these
                  problems every single day. We have fixed thousands of sealed
                  units in Calgary over the years and I doubt that we're done
                  yet. If you are experiencing these persistent problems, KLAAD
                  Glass can help by offering you quality, professional window
                  services at a fair price so that with our help, you can enjoy
                  clear, fog-free windows in no time, and restore that beautiful
                  view!
                </p>
                <p>Foggy windows can be a real nuisance, obstructing your view of Calgary's beautiful landscapes. Our window repair services include specialized foggy window repairs Calgary. We'll restore your windows to their clear, pristine state, improving both aesthetics and energy efficiency. Say goodbye to condensation and hello to clear, beautiful windows.</p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/window-defogging-calgary.jpg"
                alt="window defogging calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/calgary-triple-pane-window-upgrades.jpeg"
                alt="calgary triple pane window upgrades"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">
                  Triple pane window upgrades Calgary
                </h2>
                <p>
                  Are you interested in achieving greater energy efficiency in
                  your Calgary home? You might want to consider Calgary triple
                  pane window upgrades and installation. Triple pane windows are
                  a type of window that has three layers of glass, with an
                  insulating space between each layer. This design helps to
                  prevent heat loss in the winter and keep your home cooler in
                  the summer. As a result, triple pane windows can help you save
                  money on your energy bills and add to the overall comfort of
                  your home. In addition, they can also help to reduce noise
                  pollution and improve the overall aesthetics of your home.
                  Triple Glaze Upgrades will also increase the value of your
                  home and are an attractive alternative if you're selling. A
                  triple glaze upgrade is often a very important part of a
                  buyer's wish list when shopping for a new home and will often
                  be a deciding factor over a similar house with only double
                  glaze products. KLAAD Glass offers triple pane window upgrades
                  and installation services and we always offer competitive
                  rates and quality workmanship.
                </p>
                <div>
                  <h3 className="subheader bold italics ca">Benefits of Triple Pane Windows</h3>
                  <p>Triple pane windows offer superior insulation, reducing energy costs and enhancing comfort year-round. Our triple pane window upgrades in Calgary not only improve thermal efficiency but also contribute to noise reduction and increased home value. Discover the benefits of triple pane windows with KLAAD Glass.</p>
                </div>
                <div>
                  <h3 className="subheader bold italics ca">Cost Savings with Triple Pane Windows

</h3>
                  <p>Investing in triple pane windows can lead to significant long-term savings on heating and cooling bills. At KLAAD Glass, we provide transparent pricing and expert installation services to ensure you maximize your energy efficiency and savings with triple pane windows.</p>
                </div>
                
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">Window rot repair Calgary</h2>
                <p>
                  Window rotting is a serious problem that should be addressed
                  as soon as possible. Window rot can cause structural damage to
                  your home, and it can also lead to health problems for you and
                  your family. We offer window rot repair Calgary to help you
                  get rid of window rot quickly and efficiently without the
                  expense of pricey full window renovations. We use a variety of
                  techniques to remove window rot, including chemical
                  treatments, fillers, sanding, and others to fix things up. We
                  can also help you prevent window rot in the future by sealing
                  and caulking your windows, a very important and often
                  overlooked window maintenance procedure. Contact us today to
                  learn more!
                </p>
                <div>
                  <h3 className="subheader bold italics ca">Signs You Need Window Rot Repair

</h3>
                  <p>Recognizing the signs of window rot early can save you from extensive damage. Look out for peeling paint, soft or discolored wood, or a musty odor near windows. Our expert team at KLAAD Glass offers prompt window rot repair in Calgary to restore your windows and prevent further deterioration.

</p>
                </div>
                <div>
                  <h3 className="subheader bold italics ca">Causes of Window Rot</h3>
                  <p>Understanding the causes of window rot, such as moisture infiltration and poor ventilation, is crucial for preventing costly repairs. Our Calgary window rot repair services address the root causes to ensure long-lasting solutions and protect your home's structural integrity.</p>
                </div>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/window-rot-repair-calgary.jpg"
                alt="window rot repair calgary"
                className="stretch"
              />
            </Flex>
            <FlexMobileOpp>
              <StaticImage
                src="../../images/skylight-repair-calgary.jpg"
                alt="skylight repair calgary"
                className="stretch"
              />
              <div className="spacing">
                <h2 className="title bold italics">
                  Skylight installations & repairs Calgary
                </h2>
                <p>
                  Skylights are a great way to let natural light into your home
                  and can help reduce your energy costs. However, skylights can
                  also be a source of leaks and drafts. If you notice any
                  leaking or drafts around your skylight, it's important to have
                  it repaired as soon as possible. Skylight repair Calgary can
                  be tricky, so it's best to leave it to the professionals. At
                  KLAAD Glass we will be able to quickly identify the source of
                  the problem and make the necessary repairs. In most cases,
                  skylight repair Calgary is relatively straightforward and can
                  be completed in a few hours. However, more complex repairs may
                  require a more extensive investigation. Either way, skylight
                  repairs in Calgary is a job best left to the experts - contact
                  us today to get your skylight installation or repair quote!
                </p>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
            </FlexMobileOpp>
            <Flex>
              <div className="spacing">
                <h2 className="title bold italics">
                  Door installations and repairs Calgary
                </h2>
                <p>
                  We offer windows and doors Calgary services, and we specialize
                  in all types of door repairs, from patio door supply and
                  installation to screen door replacement and bug screen
                  replacement. We also specialize in storm door repairs and
                  installations. No matter what type of door you need, we can
                  help. We also offer a wide range of windows and doors, so you
                  can find the perfect fit for your home. And if you're not sure
                  what you need, our friendly and knowledgeable staff are always
                  happy to help. So why wait? Contact us today and let us help
                  you find the perfect windows and doors for your home.
                </p>
                <div>
                  <h3 className="subheader bold italics ca">Patio Door Installation Costs</h3>
                  <p>Planning for patio door installation in Calgary? Our transparent pricing and expert installation services ensure you get the best value for your investment. Whether it's a sliding patio door or French doors, KLAAD Glass provides competitive pricing and superior craftsmanship.</p>
                  </div>
                <div>
                  <h3 className="subheader bold italics ca">Interior Door Frame Considerations</h3>
                  <p>Choosing the right interior door frame is crucial for functionality and aesthetics. Our doors Calgary services include expert advice on frame materials, styles, and finishes to complement your home's interior design. Trust KLAAD Glass for professional interior door frame installations and repairs.</p>
                  </div>
                <ButtonUnderline to="/contact">
                  get free estimate &#x2192;
                </ButtonUnderline>
              </div>
              <StaticImage
                src="../../images/windows-and-doors-calgary.png"
                alt="windows and doors calgary"
                className="stretch"
              />
            </Flex>
          </Container>
        </ContentWrapper>
      </Section>
      <ResidentialFAQ />
      <CTA
        subtitle="need a new home window?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra nisl, eget et sit justo, maecenas elit."
      />
      {/* <Section>
        <Container>
          <h2 className="caps title bold accent">
            3 easy steps to a new window for your home
          </h2>
          <GridThree>
            <div className="spacing">
              <StaticImage
                src="../../images/window-installation-step-1.svg"
                alt="calgary window installation step 2"
              />
              <h3 className="caps bold">schedule your appointment</h3>
              <p>
                Schedule an appointment by calling us at{" "}
                <AnchorInline href="tel: 403-272-8932">
                  403-272-8932
                </AnchorInline>{" "}
                or using our{" "}
                <ButtonInline to="/contact">
                  online appointment form.
                </ButtonInline>
              </p>
            </div>
            <div className="spacing">
              <StaticImage
                src="../../images/window-installation-step-2.svg"
                alt="calgary window installation step 1"
              />
              <h3 className="caps bold">we take care of business</h3>
              <p>
                We have an elite crew to handle any job big or small, within
                budget, and on time.
              </p>
            </div>
            <div className="spacing">
              <StaticImage
                src="../../images/window-installation-step-3.svg"
                alt="calgary window installation step 3"
              />
              <h3 className="caps bold">Enjoy Your New Home Window</h3>
              <p>
                We go above and beyond to handle any request so you can enjoy
                your upgraded windows in no time!
              </p>
            </div>
          </GridThree>
        </Container>
      </Section> */}
      <FormContact title="get free estimate on your home window repair" />
    </Layout>
  )
}
