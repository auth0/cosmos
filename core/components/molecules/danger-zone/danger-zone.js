import React from 'react'
import Heading from '../../atoms/heading'
import Button from '../../atoms/button'
import Paragraph from '../../atoms/paragraph'
import Stack from '../stack'
import { colors, spacing, misc } from '@auth0/cosmos-tokens'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import containerStyles from '../../_helpers/container-styles'
import Automation from '../../_helpers/automation-attribute'

const Container = styled.div`
  ${containerStyles};
  margin-top: ${spacing.xlarge};
`

const MainTitle = styled(Heading)`
  margin-top: 0;
`

const TempStack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 0 auto;
  }
`
const Item = styled.li`
  padding: ${spacing.medium};
  border-bottom: 1px solid ${colors.text.error};
`

const ItemsContainer = styled.ul`
  border: 1px solid ${colors.text.error};
  border-radius: ${misc.radius};
  list-style: none;
  ${'' /* reset the default spacing for ul */};
  padding-left: 0;
  margin-bottom: 0;
  > ${Item}:last-child {
      border-bottom: none;
    }
  }
`

const Title = styled(Heading.Element)`
  font-size: 1.0714285714em;
  color: ${colors.text.error};
  margin: 0;
`

const Description = styled.div`
  margin-right: ${spacing.small};
  p {
    color: ${colors.text.secondary};
    margin: 0;
    margin-top: 0.5em;
  }
`

const Action = styled.div`
  text-align: right;
`

const DangerZone = ({ items, ...props }) => (
  <Container {...Automation('danger-zone')} {...props}>
    <MainTitle size={3}>Danger Zone</MainTitle>
    <ItemsContainer>
      {items.map(item => (
        <Item key={item.title}>
          <TempStack>
            <Description>
              <Title size={4}>{item.title}</Title>
              {item.description ? <Paragraph>{item.description}</Paragraph> : null}
            </Description>
            <Action>
              <Button
                type={item.action.type || 'button'}
                onClick={e => {
                  item.action.onClick(e)
                }}
                appearance="destructive"
                loading={item.action.loading}
                {...Automation('danger-zone.action')}
              >
                {item.action.label}
              </Button>
            </Action>
          </TempStack>
        </Item>
      ))}
    </ItemsContainer>
  </Container>
)

DangerZone.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.function
    })
  ).isRequired
}

export default DangerZone
