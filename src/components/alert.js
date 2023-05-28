import React from "react"
import styled from "styled-components"
import { Actions } from "./layoutComponents"
import { ButtonPrimary } from "./buttons"

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 50px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10000000000;
  width: 90%;
  height: 100%;
  background: rgba(255, 255, 255, 0.98);
  border: 3px solid var(--clr-accent);
  border-radius: 10px;
  display: grid;
  place-items: center;
  overflow: scroll;
  div {
    max-width: 70ch;
    text-align: center;
    padding: 2em;
  }
`

export default function Alert() {
  return (
    <div>
      <Wrapper>
        <div className="spacing">
          <h3 className="title bold accent">dear valued customers:</h3>
          <p className="heading italics bold">
            Important Notice: Storm Door Installation Services at Maximum
            Capacity
          </p>
          <p className="body--small">
            We greatly appreciate your interest in our storm door installation
            services. However, we regret to inform you that our team is
            currently operating at maximum capacity and, as a result, we are
            unable to accept new storm door installation jobs at this time.
          </p>
          <p className="body--small">
            Our commitment to providing exceptional service and ensuring the
            highest quality of workmanship is of utmost importance to us. We
            want to ensure that each customer receives the attention and care
            they deserve. By temporarily pausing new installations, we can
            maintain the highest standards for all our ongoing projects.
          </p>
          <p className="body--small">
            We understand that this may be disappointing news for those seeking
            our services, and we sincerely apologize for any inconvenience
            caused. We value your trust and assure you that we are actively
            working to expand our resources and capacity to accommodate your
            storm door installation needs as soon as possible.
          </p>
          <p className="body--small">
            In the meantime, we encourage you to explore the other products and
            services we offer. Please return to our home page:
          </p>
          <Actions>
            <ButtonPrimary to="/home">home</ButtonPrimary>
          </Actions>
        </div>
      </Wrapper>
    </div>
  )
}
