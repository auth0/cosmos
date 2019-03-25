import React, { useContext } from "react"
import { Context } from "../context/site-meta"

import { Link } from "."
export default function RepoEditLink({ filePath, children }) {
  const { repository } = useContext(Context)
  return (
    <Link
      className="repo-link "
      href={`${repository}/edit/master/${filePath}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  )
}
