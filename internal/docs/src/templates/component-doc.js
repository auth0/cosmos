import React, { useContext } from "react"
import Component from "../component"

import AppLayout from "../layouts/app"
export default function({ pageContext }) {
  const { id } = pageContext

  return (
    <AppLayout>
      <Component id={id} />
    </AppLayout>
  )
}
