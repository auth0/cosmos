const path = require("path")
const guidesTemplate = path.resolve(`src/templates/guides.js`)
const guidesIndexTemplate = path.resolve(`src/templates/guides-index.js`)
const componentTemplate = path.resolve(`src/templates/component-doc.js`)
const overviewTemplate = path.resolve(`src/templates/overview.js`)
function createPagesForSideBar(createPage, path, items) {
  if (items) {
    createPage({
      path: path,
      component: guidesIndexTemplate,
      context: {
        items: items,
      },
    })
    items.forEach(item => {
      createPagesForSideBar(createPage, item.path, item.items)
    })
  } else {
    createPage({
      path: path,
      component: guidesTemplate,
      context: {
        filepath: path === "/changelog" ? `/${path}/` : `/guides${path}/`,
      },
    })
  }
}
module.exports = ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allComponent {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allSidebarYaml {
          edges {
            node {
              title
              path
              items {
                title
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
        return
      }
      // Home Page
      createPage({
        path: "/",
        component: guidesTemplate,
        context: {
          filepath: `/guides/getting-started/`,
        },
      })
      // Overview Page
      createPage({
        path: "/overview",
        component: overviewTemplate,
      })
      // Pages from SidebarYaml
      result.data.allSidebarYaml.edges.forEach(({ node }) => {
        const { path, items } = node
        createPagesForSideBar(createPage, path, items)
      })
      // Page for components
      result.data.allComponent.edges.forEach(({ node }) => {
        const {
          id,
          fields: { slug },
        } = node
        createPage({
          path: slug,
          component: componentTemplate,
          context: {
            id: id,
          },
        })
      })
      resolve()
    })
  })
}
