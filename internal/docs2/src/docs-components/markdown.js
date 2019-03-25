import React from "react"
import classNames from "classnames"

function renderChildren({ children, parent }, options) {
  return children.map(node => renderAST({ node, parent }, options))
}
function renderAST({ node, parent }, options) {
  const { type, tagName, children = [], value } = node
  if (type === "root") {
    return <>{renderChildren({ children }, options)}</>
  } else if (type === "element") {
    const _renderer = options.overrides[tagName]
      ? options.overrides[tagName]
      : renderElement
    return _renderer({ node, parent }, options)
  } else {
    return value
  }
}
export function renderElement({ node }, options) {
  const { tagName: Tag, children = [], properties = {} } = node
  const { className: cls, ...attrs } = properties
  const className = classNames(cls)
  node.properties = { className, ...attrs }
  return (
    <Tag {...node.properties}>
      {renderChildren({ children, parent: node }, options)}
    </Tag>
  )
}
export function withMarkdown(Tag) {
  return function({ node }, options) {
    const { children, properties } = node
    return (
      <Tag {...properties}>
        {renderChildren({ children, parent: node }, options)}
      </Tag>
    )
  }
}
export function extractText(nodes = [], str = "") {
  nodes.forEach(node => {
    if (node.type === "text") {
      str = str + node.value
    } else {
      str = str + extractText(node.children)
    }
  })
  return str
}
export default function({ options = {}, children }) {
  return <>{renderAST({ node: children }, options)}</>
}
