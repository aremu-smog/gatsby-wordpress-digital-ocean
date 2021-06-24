import React from "react"
import Layout from "../../layout"
import PageHeader from "../../utils/page-header"
import Container from "../../utils/container"
import { graphql } from "gatsby"

export const blog = graphql`
  query singlePostQuery($id: String) {
    wpPost(id: { eq: $id }) {
      title
      uri
      content
      date
    }
  }
`
const BlogPostSingle = ({ data }) => {
  const post = data.wpPost
  return (
    <Layout>
      <PageHeader title={post.title} />
      <Container>
        <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
      </Container>
    </Layout>
  )
}

export default BlogPostSingle
