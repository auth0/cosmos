import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from 'auth0-cosmos/tokens'

import Section from '../ov-components/section'
import Example from '../ov-components/example'

/* TODO: Extract ClientList as a local component in manage/components */
/* TODO: Extract ConnectionsList as a local component in manage/components */

import { List, Button, ButtonGroup, Code, Link, Stack, Switch, Icon, Thumbnail } from 'auth0-cosmos'

import ClientTypeImages from '../../manage/components/client-types-images'
const clients = [
  {
    id: 'apXVn76xBT7WougWj17MGXHSthfrBB',
    name: 'My Site',
    type: 'REGULAR WEB APP',
    image: ClientTypeImages.regular_web
  },
  {
    id: 'NfZmyIGFwJ2OhoGcWhYfeql5Ugy4X',
    name: 'Real View',
    type: 'SINGLE PAGE APPLICATION',
    image: ClientTypeImages.spa
  },
  {
    id: 'KyVu1XTC6jOFPIUhi0yFifanPwE3l',
    name: 'Route App',
    type: 'NATIVE',
    image: ClientTypeImages.native
  },
  {
    id: 'JKYNATAI6jOFPIUhi08AUJUAja7yYo',
    name: 'Help Desk',
    type: 'NATIVE',
    image: ClientTypeImages.native
  },
  {
    id: 'Uaf45iaIxiTRP98Jmamkasd8xjKLl',
    name: 'Single Page',
    type: 'NON INTERACTIVE',
    image: ClientTypeImages.non_interactive
  },
  {
    id: 'GMdIcXxiTRPGtIZKzAN8caUWhxeb1W',
    name: 'Test App',
    type: 'NON INTERACTIVE',
    image: ClientTypeImages.non_interactive
  }
]

/* TODO: Should be a Close Component */
const NameGroup = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${spacing.xsmall};
  }
`

/* TODO: Should be a type of paragraph: Paragrapgh small? */
const ClientID = styled.span`
  font-size: 13px;
  color: ${colors.base.grayDarkest};
  margin-right: ${spacing.xsmall};
`

/* TODO: Should be a Component or part of typographic styles: allcaps ? */
const Type = styled.div`
  font-size: 12px;
  color: ${colors.base.grayDark};
  letter-spacing: 1px;
  line-height: normal;
  margin-top: ${spacing.xsmall};
  text-transform: uppercase;
`

// TODO: Remove the ConnectionType component and maybe do a flag component
const ConnectionType = styled.div`
  span {
    display: inline-block;
    vertical-align: middle;
  }
`

const ListsExample = () => (
  <Section>
    <Example title="List of Connections">
      <List label="Social">
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>github</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>GitHub</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>google-oauth2</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>Google</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
      </List>
    </Example>

    <Example title="List of Clients">
      <List>
        {clients.map(client => (
          <Stack key={client.id} widths={[35, 40, 25]}>
            <NameGroup>
              <Thumbnail source={client.image} />
              <div>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
                <Type>{client.type}</Type>
              </div>
            </NameGroup>
            <Stack align="left">
              <ClientID>Client ID</ClientID>
              <Code>{client.id}</Code>
            </Stack>
            <ButtonGroup align="right">
              <Button icon="quickstarts" label="Quickstart" />
              <Button icon="settings" label="Settings" />
              <Button icon="code" label="Addons" />
              <Button icon="connections" label="Connections" />
            </ButtonGroup>
          </Stack>
        ))}
      </List>
    </Example>
  </Section>
)

export default ListsExample
