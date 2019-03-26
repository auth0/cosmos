import React from "react"
import Overview from "../overview"

import AppLayout from "../layouts/app"
export default function() {
  return (
    <AppLayout outsideBody>
      <Overview />
    </AppLayout>
  )
}
