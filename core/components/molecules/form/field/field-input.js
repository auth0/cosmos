import React from 'react'
import ReactDOM from 'react-dom'

const { Provider, Consumer } = React.createContext()

const FieldInput = props => {
  const { Component, ...fieldProps } = props
  /*
    old API
    we proxy through all the props to the input element
  */
  if (Component) return <Component {...fieldProps} />

  /*
    New API
    We create a context around the field to pass the field id
  */
  let { children, id } = fieldProps
  return <Provider value={{ formFieldId: id }}>{children}</Provider>
}

FieldInput.ContextConsumer = Consumer
export default FieldInput
