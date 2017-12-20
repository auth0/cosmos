import React from 'react'

import { Input } from '../../components'

const SearchBox = props => (
  <Input
    autoFocus
    placeholder="Search for a component"
    onChange={e => props.onChange(e.target.value)}
  />
)

export default SearchBox
