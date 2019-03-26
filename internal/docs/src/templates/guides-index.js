import React from "react"
import { Link } from "gatsby"
import { Heading2 } from "./../docs-components/typography"
import AppLayout from "../layouts/app"
export default function({ pageContext }) {
  const { items } = pageContext
  return (
    <AppLayout>
      {items.map(item => {
        return (
          <section id={item.path}>
            <Heading2>
              <Link className="heading" to={item.path}>
                {item.title}
              </Link>
            </Heading2>
          </section>
        )
      })}
    </AppLayout>
  )
}
