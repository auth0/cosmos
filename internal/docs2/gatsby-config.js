const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require("lodash.kebabcase")

const { repository } = require("./../../package.json")
module.exports = {
  siteMetadata: {
    title: `Auth0 Cosmos`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `auth0-cosmos.now.sh`,
    repository: repository,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/.tmp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        path: `${__dirname}/.tmp`,
        typeName: ({ node }) => {
          return node.relativePath.replace(".json", "")
        },
      },
    },
    {
      resolve: `gatsby-plugin-slugify`,
      options: {
        config: [
          {
            internalNodeType: "component",
            template: "component/{}",
            interpolationProps: ({ node: { displayName } }) => {
              return kebabCase(displayName)
            },
          },
          {
            path: `${__dirname}/.tmp`,
            internalNodeType: "MarkdownRemark",
            template: "{}",
            interpolationProps: ({ node }) => {
              return node.fileAbsolutePath.replace(`${__dirname}/.tmp`, "")
            },
          },
          {
            path: `${__dirname}/content/guides`,
            internalNodeType: "MarkdownRemark",
            template: "{}",
            interpolationProps: ({ node, getNode }) => {
              const slug = createFilePath({
                node,
                getNode,
                trailingSlash: false,
              })
              return slug
            },
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
