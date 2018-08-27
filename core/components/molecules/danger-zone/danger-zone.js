import React from 'react'
import Heading from '../../atoms/heading'
import Button from '../../atoms/button'
import Paragraph from '../../atoms/paragraph'
import Stack from '../stack'
import { colors, spacing, misc } from '@auth0/cosmos-tokens'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin-top: 32px;
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
  > ${Item}:last-child {
      border-bottom: none;
    }
  }
`

const Title = styled(Heading).attrs({
  size: 4
})`
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

const DangerZone = ({ items }) => (
  <Container>
    <Heading size={3}>Danger Zone</Heading>
    <ItemsContainer>
      {items.map(item => (
        <Item key={item.title}>
          <TempStack>
            <Description>
              <Title>{item.title}</Title>
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
  items: PropTypes.array.isRequired
}

export default DangerZone
