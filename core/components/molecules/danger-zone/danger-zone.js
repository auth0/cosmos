import React from 'react'
import Heading from '../../atoms/heading'
import Button from '../../atoms/button'
import Paragraph from '../../atoms/paragraph'
import Stack from '../stack'
import { colors } from '@auth0/cosmos-tokens'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  margin-top: 32px;
`;

const ItemsContainer = styled.div`
  border: 1px solid ${colors.base.red};
  border-radius: 3px;
`;

const Item = styled(Stack)`
  padding: 24px;
  border-bottom: 1px solid ${colors.base.grayLight};
`;

const Description = styled.div`
  p {
    color: ${colors.base.grayMedium};
    font-size: 13px;
  }
`;

const Action = styled.div`
  text-align: right;
`;

const DangerZone = ({ items }) => (
  <Container>
    <Heading size={3}>Danger Zone</Heading>
    <ItemsContainer>
      {items.map(item => (
        <Item
          key={item.description}
          align="space-between"
          widths={[80, 20]}
        >
          <Description>
            <Heading size={4}>{item.title}</Heading>
            <Paragraph>{item.description}</Paragraph>
          </Description>

          <Action>
            <Button
              type={item.action.type || "button"}
              onClick={e => {
                item.action.onClick(e);
              }}
              appearance="destructive"
              loading={item.action.loading}
            >
              {item.action.label}
            </Button>
          </Action>
        </Item>
      ))}
    </ItemsContainer>
  </Container>
);

DangerZone.propTypes = {
  items: PropTypes.array.isRequired
};

export default DangerZone;
