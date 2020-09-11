import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Container, Section } from "../global"

const GetStarted = ({ focusEmailInput }) => (
  <Section>
    <GetStartedContainer>
      <GetStartedTitle>Be the first to get the beta</GetStartedTitle>
      <StyledAnchorLink href="#top">
        <TryItButton onClick={focusEmailInput}>Request Access</TryItButton>
      </StyledAnchorLink>
      <Subtitle>No credit card required.</Subtitle>
    </GetStartedContainer>
  </Section>
)

export default GetStarted

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const StyledAnchorLink = styled(AnchorLink)`
  text-decoration: none;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
