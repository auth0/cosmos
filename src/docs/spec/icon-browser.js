import React from 'react'
import styled from 'styled-components'
import fuzzysearch from 'fuzzysearch'
import { TextInput, Icon } from '../../components'
import { spacing } from '../../tokens'
import { types, aliases } from '../icons.json'

const IconBrowserElement = styled.div`
  margin: ${spacing.medium} 0 64px;
`

const IconBrowserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const IconBrowserLink = styled.a`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60px;
  height: 60px;
  margin: ${spacing.medium};
  ${Icon.Element} {
    flex: none;
    margin-right: 0;
    margin-bottom: ${spacing.xsmall};
  }
`

class IconBrowser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter: '' }
  }

  handleChange = evt => {
    var filter = evt.target.value
    this.setState((state, props) => {
      return { filter }
    })
  }

  getMatchingIcons(filter) {
    if (!filter) return types

    const search = filter.toLowerCase()
    return Object.keys(aliases)
      .filter(alias => fuzzysearch(search, alias))
      .map(alias => aliases[alias])
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort()
  }

  render() {
    const { filter } = this.state

    const icons = this.getMatchingIcons(filter).map((name, index) => (
      <li key={index}>
        <IconBrowserLink>
          <Icon name={name} size={40} />
          <span>{name}</span>
        </IconBrowserLink>
      </li>
    ))

    return (
      <IconBrowserElement>
        <TextInput
          placeholder="Start typing to search for icons..."
          value={filter}
          onChange={this.handleChange}
        />
        <IconBrowserList>{icons}</IconBrowserList>
      </IconBrowserElement>
    )
  }
}

export default IconBrowser
