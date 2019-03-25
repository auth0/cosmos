import React from "react"
import RepoEditLink from "./repo-edit-link"
export default function SuggestChange({ filePath }) {
  return (
    <RepoEditLink filePath={filePath}>
      Suggest a change{" "}
      <span role="img" aria-label="Suggest a change">
        ✍️
      </span>
    </RepoEditLink>
  )
}
