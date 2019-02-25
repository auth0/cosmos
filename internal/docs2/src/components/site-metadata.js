import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const SiteMetadata = ({ pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title },
      },
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <html lang="en" />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={title} />
      </Helmet>
    )}
  />
)

export default SiteMetadata
