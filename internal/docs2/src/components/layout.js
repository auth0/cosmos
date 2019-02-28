import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'

import { Code, Heading, Paragraph, Link } from '@auth0/cosmos'
import '@auth0/cosmos-fonts'

import Playground from '../components/playground'
import SiteMetadata from '../components/site-metadata'
import Header from './header'
import Sidebar from './sidebar'

// import './layout.css'

const Layout = ({ children, componentName, metadata }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <SiteMetadata />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sidebar />

        <MDXProvider
          components={{
            // Map HTML element tag to React component
            h1: props => <Heading size={1} {...props} />,
            h2: props => <Heading size={2} {...props} />,
            h3: props => <Heading size={3} {...props} />,
            // Or define component inline
            a: Link,
            p: Paragraph,
            code: props => {
              const language = props.className

              if (!language) return <Code>{props.children}</Code>
              else if (['language-js', 'language-jsx'].includes(language)) {
                return (
                  <div>
                    <Playground
                      code={props.children}
                      language={language}
                      componentName={componentName}
                    />
                  </div>
                )
              } else {
                return null
              }
            },
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            {children}
          </div>
        </MDXProvider>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
