import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = ({ nameInput }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product/green-skew.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const [submitButtonText, setSubmitButtonText] = React.useState(
    "Request Access"
  )
  const companyInput = React.useRef()
  const emailInput = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitButtonText("Submitting...")

    const form = document.forms["submit-to-google-sheet"]
    fetch(
      "https://script.google.com/macros/s/AKfycbx8CTYZiYSK_XHK849XWfRThOnUD-Vn5i7w1z3HGgrdQCihmeCq/exec",
      { method: "POST", body: new FormData(form) }
    )
      .then(response => {
        console.log("Success!", response)
        companyInput.current.value = ""
        emailInput.current.value = ""
        nameInput.current.value = ""
        setSubmitButtonText("Done!")
      })
      .catch(error => {
        console.error("Error!", error.message)
        setSubmitButtonText("Error!")
      })
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>IoTDoctor</Subtitle>
            <h1>
              An Elegant and Flexible
              <br />
              MQTT Dashboard
            </h1>
            <h2>
              We're offering extensible command-and-control solutions for your
              IoT needs.
            </h2>
            <HeaderForm name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <HeaderInput
                name="name"
                id="name-form"
                placeholder="Your Name"
                ref={nameInput}
              />
              <HeaderInput
                name="company"
                id="company-form"
                placeholder="Your company"
                ref={companyInput}
              />
              <HeaderInput
                required
                name="email"
                type="email"
                id="email-form"
                placeholder="Your email"
                ref={emailInput}
              />
              <HeaderButton value={submitButtonText} type="submit" />
            </HeaderForm>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  margin-left: 5px;
  margin-bottom: 5px;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.input`
  width: 249.2px;
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
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
