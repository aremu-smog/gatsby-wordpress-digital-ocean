import React from "react"
import Layout from "../components/layout"
import Container from "../components/utils/container"
import PageHeader from "../components/utils/page-header"

const Overview = () => {
  return (
    <Layout title="Overview">
      <PageHeader title="Project Overview" />
      <Container>
        <h1 className="text-8xl">
          Gotcha! Kindly read the README.md for more details
        </h1>
      </Container>
    </Layout>
  )
}

export default Overview
