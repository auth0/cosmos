import React from "react"
import Markdown from "markdown-to-jsx"
import yaml from "yamljs"

import LiveCodeBlock from "./live-code-block"
import Break from "./break"

import IconBrowser from "./icon-browser"
import { Alert } from "@auth0/cosmos"
import {
  Text,
  List,
  Link,
  Code,
  Table,
  SuggestChange,
} from "../docs-components"
import PageHeader from "./page-header"
import { SectionHeader, ExampleHeader } from "./header"

const Example = props => {
  const options = {
    overrides: {
      hr: Break,
      h2: SectionHeader,
      h3: ExampleHeader,
      p: Text,
      a: Link,
      li: List.Item,
      ul: List,
      table: Table,
      /* use playground for js code blocks */
      code: markdownProps => {
        const language = markdownProps.className
        if (!language) return <Code>{markdownProps.children}</Code>
        else if (["lang-js", "lang-jsx"].includes(language)) {
          return (
            <div>
              <LiveCodeBlock
                code={markdownProps.children}
                language={language}
                component={props.component}
              />
            </div>
          )
        } else {
          return null
        }
      },
      Alert,
      IconBrowser,
    },
  }
  return (
    <div style={{ maxWidth: 800 }}>
      <PageHeader
        {...props.component.meta}
        displayName={props.component.displayName}
      />
      <Markdown options={options}>{props.component.documentation}</Markdown>
      <SuggestChange
        filePath={props.component.documentationFile.relativePath}
      />
    </div>
  )
}

export default Example
