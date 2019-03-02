import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import MetadataContext from './metadata-context'

import { Heading, Label } from '@auth0/cosmos'

export default ({ data: { mdx, allDataJson } }) => {
  return (
    <Layout
      metadata={allDataJson.edges[0].node.metadata}
      componentName={mdx.frontmatter.componentName}
    >
      <Heading size={1}>{mdx.frontmatter.title}</Heading>
      <p>{mdx.frontmatter.description}</p>

      <MetadataContext.Provider value={allDataJson.edges[0].node.metadata}>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
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
            propString
            documentation
            displayName
            meta {
              category
              description
              unstable
              desciption
            }
          }
        }
      }
    }
  }
`
