import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <p>{mdx.frontmatter.description}</p>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>

      <h3>List</h3>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ComponentsQuery($id: [String]) {
    mdx(id: { in: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      code {
        body
      }
    }
  }
`
