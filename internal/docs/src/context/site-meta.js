import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const Context = React.createContext()

export function Provider(props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          author
          title
          repository
        }
      }
    }
  `)
  const value = data.site.siteMetadata
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}
