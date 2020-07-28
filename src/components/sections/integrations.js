import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Section } from "../global"

const Integrations = () => {
  const data = useStaticQuery(graphql`
    query {
      slack: file(relativePath: { eq: "slack-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      jira: file(relativePath: { eq: "jira-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      zendesk: file(relativePath: { eq: "zendesk-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      trello: file(relativePath: { eq: "trello-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="integrations">
      <IntegrationsContainer>
        <Subtitle>Third-Party Integrations</Subtitle>
        <IntegrationsTitle>Supercharge your workflow</IntegrationsTitle>
        <ExtraSmall>Coming Soon...</ExtraSmall>
        <IntegrationsGrid>
          <ImageWrapper>
            <StyledImage fluid={data.slack.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.jira.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.zendesk.childImageSharp.fluid} />
          </ImageWrapper>
          <ImageWrapper>
            <StyledImage fluid={data.trello.childImageSharp.fluid} />
          </ImageWrapper>
        </IntegrationsGrid>
      </IntegrationsContainer>
    </StyledSection>
  )
}

export default Integrations

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const StyledImage = styled(Img)`
  width: 200px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const IntegrationsContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const IntegrationsTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const IntegrationsGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const ExtraSmall = styled.span`
  ${props => props.theme.font_size.xxsmall}
`
