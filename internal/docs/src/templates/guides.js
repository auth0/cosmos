import React from "react"
import { graphql } from "gatsby"
import AppLayout from "../layouts/app"
import { Context } from "./../context/site-meta"
import {
  Heading1,
  Heading2,
  Heading3,
  Text,
  Code,
  CodeBlock,
  Link,
  List,
  SuggestChange,
} from "../docs-components"
import Markdown, {
  withMarkdown,
  extractText,
  renderElement,
} from "./../docs-components/markdown"

const options = {
  overrides: {
    h1: withMarkdown(Heading1),
    h2: withMarkdown(Heading2),
    h3: withMarkdown(Heading3),
    p: withMarkdown(Text),
    a: withMarkdown(Link),
    li: withMarkdown(List.Item),
    ul: withMarkdown(List),
    code: withMarkdown(Code),
    pre: function({ node, parent }, options) {
      const { children } = node
      const [codeTag] = children
      const {
        properties: { className = [] },
      } = codeTag

      let [language] = className
      if (language) {
        language = language.replace("language-", "")
        const text = extractText(children)
        return <CodeBlock language={language}>{text}</CodeBlock>
      } else {
        return renderElement({ node, parent }, options)
      }
    },
  },
}
function Guide({ children, filePath }) {
  const { repository } = React.useContext(Context)
  const repoName = repository.split("/").pop()
  const path = filePath.includes(".tmp")
    ? filePath.split(".tmp/")[1]
    : filePath.split(repoName)[1].replace("/", "")
  return (
    <>
      <Markdown options={options}>{children}</Markdown>
      <SuggestChange filePath={path} />
    </>
  )
}
export default function({ data }) {
  const [{ htmlAst, fileAbsolutePath }] = data.guides.edges.map(
    ({ node: { htmlAst, fileAbsolutePath } }) => ({
      htmlAst,
      fileAbsolutePath,
    })
  )
  return (
    <AppLayout>
      <Guide filePath={fileAbsolutePath}>{htmlAst}</Guide>
    </AppLayout>
  )
}
export const query = graphql`
  query($filepath: String!) {
    guides: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $filepath } }
    ) {
      edges {
        node {
          htmlAst
          fileAbsolutePath
        }
      }
    }
  }
`
