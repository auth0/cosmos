import React, { useContext } from "react"
import Helmet from "react-helmet"

import { Context } from "../context/component-context"
import ComponentPage from "./page"

export default ({ id }) => {
  const components = useContext(Context)
  const component = components.find(item => item.id === id)
  return (
    <div>
      <Helmet title={component.displayName + " — Cosmos"} />
      <ComponentPage component={component} />
    </div>
  )
}
