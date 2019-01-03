import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: '0',
  condensed: spacing.small,
  default: spacing.medium,
  spacious: spacing.xlarge
}

const VerticalNav = props => (
  <VerticalNav.Element
    {...Automation('vertical-nav')}
    {...props}
    aria-label="[landmark description]"
  >
    <VerticalNav.Section aria-labelledby="header-id">
      <VerticalNav.Header id="header-id">Header</VerticalNav.Header>
      <VerticalNav.List>
        <VerticalNav.Item>
          <VerticalNav.Link>
            <VerticalNav.LinkIcon>i</VerticalNav.LinkIcon>
            <VerticalNav.LinkText>Link Item</VerticalNav.LinkText>
          </VerticalNav.Link>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <VerticalNav.Link>
            <VerticalNav.LinkIcon>i</VerticalNav.LinkIcon>
            <VerticalNav.LinkText>Link Item</VerticalNav.LinkText>
          </VerticalNav.Link>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <VerticalNav.Link>
            <VerticalNav.LinkIcon>i</VerticalNav.LinkIcon>
            <VerticalNav.LinkText>Link Item</VerticalNav.LinkText>
          </VerticalNav.Link>
        </VerticalNav.Item>
      </VerticalNav.List>
    </VerticalNav.Section>
  </VerticalNav.Element>
)

VerticalNav.Element = styled.nav`
  background: red;
`

VerticalNav.List = styled.ul`
  background-color: violet;
`

VerticalNav.Item = styled.li`
  background-color: orange;
`

VerticalNav.Link = styled.a`
  background-color: red;
  padding-top: ${spacing.xsmall};
  padding-bottom: ${spacing.xsmall};
  display: flex;
`

VerticalNav.LinkIcon = styled.span`
  background-color: peachpuff;
  margin-right: ${spacing.xsmall};
`
VerticalNav.LinkText = styled.span`
  background-color: papayawhip;
`

VerticalNav.Section = styled.section`
  background-color: yellow;
`

VerticalNav.Header = styled.h2`
  background-color: yellowgreen;
`

// RowLayout.propTypes = {
//   /** Regulates the size of the gutter between rows*/
//   gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
//   /** Resets the margins of the component within the layout to generate consistent spaces. */
//   disableMarginReset: PropTypes.bool
// }

// RowLayout.defaultProps = {
//   gutter: 'default'
// }

export default VerticalNav
