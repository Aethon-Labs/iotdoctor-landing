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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <Integrations />
    <Product />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
