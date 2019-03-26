import React from "react"

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
  Heading1,
  Heading2,
  Heading3,
  CodeBlock,
} from "../docs-components"
import PageHeader from "./page-header"
import { SectionHeader, ExampleHeader } from "./header"

import Markdown, {
  withMarkdown,
  extractText,
  renderElement,
} from "./../docs-components/markdown"

const Example = props => {
  // const options = {
  //   overrides: {
  //     hr: Break,
  //     h2: SectionHeader,
  //     h3: ExampleHeader,
  //     p: Text,
  //     a: Link,
  //     li: List.Item,
  //     ul: List,
  //     table: Table,
  //     /* use playground for js code blocks */
  //     code: markdownProps => {
  //       const language = markdownProps.className
  //       if (!language) return <Code>{markdownProps.children}</Code>
  //       else if (["lang-js", "lang-jsx"].includes(language)) {
  //         return (
  //           <div>
  //             <LiveCodeBlock
  //               code={markdownProps.children}
  //               language={language}
  //               component={props.component}
  //             />
  //           </div>
  //         )
  //       } else {
  //         return null
  //       }
  //     },
  //     Alert,  // TODO: which element will Alert,IconBrowser replace in markdown?
  //     IconBrowser,
  //   },
  // }
  const options = {
    overrides: {
      h1: withMarkdown(Heading1),
      h2: withMarkdown(SectionHeader),
      h3: withMarkdown(ExampleHeader),
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
          if (["js", "jsx"].includes(language)) {
            return (
              <div>
                <LiveCodeBlock
                  code={text}
                  language={language}
                  component={props.component}
                />
              </div>
            )
          } else {
            return <CodeBlock language={language}>{text}</CodeBlock>
          }
        } else {
          return renderElement({ node, parent }, options)
        }
      },
    },
  }
  return (
    <div style={{ maxWidth: 800 }}>
      <PageHeader
        {...props.component.meta}
        displayName={props.component.displayName}
      />
      <Markdown options={options}>{props.component.documentation}</Markdown>
      {props.component.documentationFile && (
        <SuggestChange
          filePath={props.component.documentationFile.relativePath}
        />
      )}
    </div>
  )
}

export default Example
