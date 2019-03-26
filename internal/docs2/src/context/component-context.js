import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const Context = React.createContext()

export function Provider(props) {
  const data = useStaticQuery(graphql`
    {
      components: allComponent {
        edges {
          node {
            fields {
              slug
            }
            id
            description

            documentationFile {
              relativePath
            }
            displayName
            filepath
            props
            implemented
            _internal
          }
        }
      }
      docs: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            htmlAst
            frontmatter {
              category
              description
              unstable
            }
          }
        }
      }
    }
  `)
  const docsMap = data.docs.edges.reduce((result, { node }) => {
    const key = node.fields.slug.replace("/", "")
    result[key] = node
    return result
  }, {})
  const components = data.components.edges.map(({ node }) => {
    let props, documentation, meta
    if (node.props) {
      props = JSON.parse(node.props)
      Object.keys(props).forEach(name => {
        props[name].name = name
      })
    }
    if (node.documentationFile) {
      const documentationFile = docsMap[node.documentationFile.relativePath]
      documentation = documentationFile.htmlAst
      meta = documentationFile.frontmatter
    }
    return { ...node, props, meta, documentation }
  })
  return (
    <Context.Provider value={components}>{props.children}</Context.Provider>
  )
}
