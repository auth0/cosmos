import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import MetadataContext from './metadata-context'

import { Heading } from '@auth0/cosmos'

export default ({ data: { mdx, allDataJson } }) => {
  const title = mdx.frontmatter.title
  const description = mdx.frontmatter.description
  const body = mdx.code.body
  const componentName = mdx.frontmatter.componentName
  const allMetadata = allDataJson.edges[0].node.metadata

  return (
    <Layout metadata={allMetadata} componentName={componentName}>
      <Heading size={1}>{title}</Heading>
      <p>{description}</p>

      <MetadataContext.Provider value={allMetadata}>
        <MDXRenderer>{body}</MDXRenderer>
      </MetadataContext.Provider>
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
    allDataJson {
      edges {
        node {
          metadata {
            displayName
            propString
          }
        }
      }
    }
  }
`
