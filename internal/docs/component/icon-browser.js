import React from 'react'
import styled from 'styled-components'
import fuzzysearch from 'fuzzysearch'
import { TextInput, Icon, GalleryLayout, RowLayout } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos/tokens'
import { types, aliases } from '@auth0/cosmos/meta/icons.json'
import sections from '../../../core/icons/aliases.json'

const Browser = styled.div`
  margin: ${spacing.medium} 0 64px;
`

const Rows = styled(RowLayout)`
  grid-gap: 4rem;
  > *:empty {
    display: none;
  }
`

const Heading = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: ${spacing.xsmall};
`

const Name = styled.div`
  color: #757575;
`

const Card = styled.div`
  display: grid;
  text-align: center;
  justify-items: center;
  /* outline: 1px solid #757575; */
  padding: ${spacing.small} ${spacing.xsmall};
  ${Icon.Element} {
    margin: ${spacing.small} 0;
  }
  &:hover  {
    ${Name} {
      color: #333;
    }
  }
`

const processedSections = (() => {
  const uniqueIcons = [...new Set(Object.values(aliases))]
  const uniqueAliasedIcons = Object.keys(sections).reduce(
    (prev, current) => [...prev, ...Object.keys(sections[current])],
    []
  )
  const notAliasedIcons = uniqueIcons.filter((item) => !uniqueAliasedIcons.includes(item))

  const uncategorized = {}

  notAliasedIcons.forEach((icon) => {
    uncategorized[icon] = [icon]
  })

  return { ...sections, uncategorized }
})()

class IconBrowser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter: '' }
  }

  handleChange = (evt) => {
    var filter = evt.target.value
    this.setState((state, props) => {
      return { filter }
    })
  }

  getMatchingIcons(filter) {
    if (!filter) return types

    const search = filter.toLowerCase()

    return Object.keys(aliases)
      .filter((alias) => fuzzysearch(search, alias))
      .map((alias) => aliases[alias])
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort()
  }

  filterIconsForSection(section, icons) {
    const sectionIcons = icons.filter((icon) => !!processedSections[section][icon])

    if (sectionIcons.length === 0 || section == 'Deprecated') return null

    return (
      <section>
        <RowLayout gutter="small">
          <Heading>{section}</Heading>
          <Grid>
            {sectionIcons.map((name, index) => (
              <li index={index}>
                <Card>
                  <Icon name={name} size={32} />
                  <Name>{name}</Name>
                </Card>
              </li>
            ))}
          </Grid>
        </RowLayout>
      </section>
    )
  }

  render() {
    const { filter } = this.state

    const matchingIcons = this.getMatchingIcons(filter)

    return (
      <Browser>
        <RowLayout gutter="large">
          <TextInput
            placeholder="Start typing to search for icons..."
            value={filter}
            onChange={this.handleChange}
          />
          <Rows gutter="large">
            {Object.keys(processedSections).map((section) =>
              this.filterIconsForSection(section, matchingIcons)
            )}
          </Rows>
        </RowLayout>
      </Browser>
    )
  }
}

export default IconBrowser
