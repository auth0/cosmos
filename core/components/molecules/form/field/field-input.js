import React from 'react'
import ReactDOM from 'react-dom'

/*
  There can be just one or multiple input fields inside a Form.Field.

  We want to pass our accessibility props to the first input element.
  This might be the only child in the field as well.

  However, multiple fields would typically be wrapped inside one
  layout component like StackLayout which means a single child for us.
  The layout element should never get the id.

  Here's what we can do:

  1. In render

     If the first child is a cosmos component that renders an input element
     without a container like ['TextInput', 'TextArea', 'Select'], we can
     attach an id rightaway.

     If it's one of the cosmos components that has a more complex nested structure
     like ['Switch', 'Radio', 'Checkbox'] or if the first child is a layout component,
     we can't attach an id on the parent, we handle this as a progressive enhancement
     after render.

  2. After render:

     On componentDidMount, we find the first input element and set the id attribute
     if it wasn't already set.

     This means the rendered output is initially not accessible, but is made
     accessible progressively.
*/

const cosmosInputWhitelist = ['TextInput', 'TextArea', 'Select']

class FieldInput extends React.Component {
  constructor(props) {
    super(props)
    this.firstChildRef = React.createRef()
  }
  render() {
    const { Component, ...fieldProps } = this.props
    /*
        old API support, we proxy through all the props
        to the input element
      */
    if (Component) return <Component {...fieldProps} />

    /*
      New API
      Here be dragons. Read the story above to justify the following complexity
    */
    let { children, id } = fieldProps

    /* find the first child */
    let modifiedChildren = React.Children.toArray(children)
    const firstChild = modifiedChildren[0]

    /*
      If the first child is one of the input elements in the whitelist,
      we can make it accessible by attaching the id.

      Otherwise we perform a progressive enhancement and attach an id
      after render = componentDidMount.

      We keep track of the first child by attaching a ref to it.
    */

    let firstChildProps = {}

    const componentName = firstChild.type.displayName
    if (cosmosInputWhitelist.includes(componentName)) firstChildProps.id = id

    /*
      If it's a cosmos component, it uses styled-components,
      which means we need to use innerRef

      If it it's a html element, we can just use ref

      Note: This will give an error for a non cosmos element :/
    */

    if (typeof firstChild.type === 'string') {
      firstChildProps.ref = this.firstChildRef
    } else {
      firstChildProps.innerRef = this.firstChildRef
    }

    const taggedFirstChild = React.cloneElement(firstChild, firstChildProps)
    modifiedChildren[0] = taggedFirstChild

    return modifiedChildren
  }
  componentDidMount() {
    const firstChild = ReactDOM.findDOMNode(this.firstChildRef.current)

    /* ref wouldn't be defined for old API, skip that */
    if (!firstChild) return

    const nodeName = firstChild.nodeName
    let inputElement

    /*
      Find the first input element, this might be the firstChild itself
      or inside it.
    */

    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(nodeName)) {
      inputElement = firstChild
    } else {
      inputElement =
        firstChild.querySelector('input') ||
        firstChild.querySelector('textarea') ||
        firstChild.querySelector('select')
    }

    /* If there's isnt any input element here, skip this step */
    if (!inputElement) return

    /* If we were successful in adding an id in the render step, skip this step */
    if (inputElement.id) return

    inputElement.setAttribute('id', this.props.id)
  }
}

export default FieldInput
