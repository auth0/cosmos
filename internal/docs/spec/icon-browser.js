import React from 'react'
import styled from 'styled-components'
import fuzzysearch from 'fuzzysearch'
import { TextInput, Icon } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos/tokens'
import { types, aliases } from '@auth0/cosmos/meta/icons.json'
import sections from '../../../core/icons/aliases.json'

const IconBrowserElement = styled.div`
  margin: ${spacing.medium} 0 64px;
`

const IconBrowserSection = styled.div``

IconBrowserSection.Title = styled.h3`
  opacity: 0.5;
  text-transform: capitalize;
  font-size: 1.5em;
  margin-top: 1em;
  margin-left: 1em;
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

  filterIconsForSection(section, icons) {
    const sectionIcons = icons.filter(icon => !!sections[section][icon])

    return sectionIcons.map((name, index) => (
      <li key={index}>
        <IconBrowserLink>
          <Icon name={name} size={40} />
          <span>{name}</span>
        </IconBrowserLink>
      </li>
    ))
  }

  render() {
    const { filter } = this.state

    const matchingIcons = this.getMatchingIcons(filter)

    return (
      <IconBrowserElement>
        <TextInput
          placeholder="Start typing to search for icons..."
          value={filter}
          onChange={this.handleChange}
        />
        {Object.keys(sections).map(section => (
          <IconBrowserSection>
            <IconBrowserSection.Title>{section}</IconBrowserSection.Title>
            <IconBrowserList>{this.filterIconsForSection(section, matchingIcons)}</IconBrowserList>
          </IconBrowserSection>
        ))}
      </IconBrowserElement>
    )
  }
}

export default IconBrowser
