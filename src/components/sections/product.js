import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Section } from "../global"

const Product = () => {
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
    <StyledSection id="product">
      <ProductContainer>
        <Subtitle>Showcase</Subtitle>
        <ProductTitle>See it in action</ProductTitle>
        <ExtraSmall>Coming Soon...</ExtraSmall>
      </ProductContainer>
    </StyledSection>
  )
}

export default Product

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

const ProductContainer = styled(Container)`
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

const ProductTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const ProductGrid = styled.div`
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
