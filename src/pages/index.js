import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageHeader from "../components/utils/page-header"

const IndexPage = () => (
  <Layout title="" ignoreSiteName={true}>
    <PageHeader
      title="FourthCanvas GatsbyJS Projects Starter"
      subheading="This project gives a basic architecture from repeating patterns we have observed from most client projects and is supposed to help you started fast up and running fast. For detailed instruction, kindly refer to the README.md of this project. Please feel free to bend this project your will! Delete, add, update files/components as the case may be."
    />
    <section>
      <StaticImage
        src="../images/fourthcanvas.jpg"
        placeholder="blurred"
        alt="FourthCanvas Team"
      />
    </section>
  </Layout>
)

export default IndexPage
