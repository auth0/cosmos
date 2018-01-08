import React from 'react'

import { TextInput } from '../../components'

const SearchBox = props => (
  <TextInput
    autoFocus
    placeholder="Search for a component"
    onChange={e => props.onChange(e.target.value)}
  />
)

export default SearchBox
