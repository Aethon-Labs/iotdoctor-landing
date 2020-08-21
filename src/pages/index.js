import React from "react"

import SEO from "../components/common/layout/seo"
import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import Product from "../components/sections/product"
import Features from "../components/sections/features"
import GetStarted from "../components/sections/getstarted"
import Integrations from "../components/sections/integrations"

const IndexPage = () => {
  const nameInput = React.useRef()

  const focusNameInput = () => {
    if (!nameInput.current) return console.log("Ref is null.")
    nameInput.current.focus()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Navigation focusEmailInput={focusNameInput} />
      <Header nameInput={nameInput} focusEmailInput={focusNameInput} />
      <Features />
      <Integrations />
      <Product />
      <GetStarted focusEmailInput={focusNameInput} />
      <Footer />
    </Layout>
  )
}

export default IndexPage
