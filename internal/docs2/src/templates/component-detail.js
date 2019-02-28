import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'

import { Heading, Label } from '@auth0/cosmos'

export default ({ data: { mdx } }) => {
  return (
    <Layout componentName={mdx.frontmatter.componentName}>
      <Heading size={1}>{mdx.frontmatter.title}</Heading>

      <p>{mdx.frontmatter.description}</p>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ComponentQuery($id: [String]) {
    mdx(id: { in: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        componentName
        description
        status
      }
      code {
        body
      }
    }
  }
`
