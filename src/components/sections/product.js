import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const Product = () => {
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

const ExtraSmall = styled.span`
  ${props => props.theme.font_size.xxsmall}
`
