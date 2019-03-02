import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'

import { Code, Heading, Paragraph, Link } from '@auth0/cosmos'
import '@auth0/cosmos-fonts'

import Playground from '../../components/playground'
import SiteMetadata from '../../components/site-metadata'

import {
  SideContent,
  AppLayout,
  HeaderContent,
  Body,
  MainContent,
  SidebarToggle,
} from './styles.js'
import Header from '../header'
import Sidebar from '../sidebar'

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
      <AppLayout>
        <SiteMetadata />
        <HeaderContent>
          <Header siteTitle={data.site.siteMetadata.title} />
        </HeaderContent>
        <SideContent>
          <Sidebar />
        </SideContent>
        <MainContent id="main">
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
            <Body>{children}</Body>
          </MDXProvider>
        </MainContent>
      </AppLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
