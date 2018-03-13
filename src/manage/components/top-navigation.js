import React from 'react'
import styled from 'styled-components'

import {
  Dummy as Dropdown,
  Dummy as TenantCard,
  Dummy as UserCard,
  Dummy
} from './dummy-components'

import Container from './container'
import { Icon, TextInput, Avatar } from 'auth0-cosmos'
import { colors, spacing } from 'auth0-cosmos/tokens'

Dropdown.Link = Dropdown.Devider = Dummy

const openSalesModal = () => {}
const switchTenant = () => {}

const links = [
  {
    label: 'Help & Support',
    url: 'https://support.auth0.com',
    target: 'blank'
  },
  {
    label: 'Documentation',
    url: 'https://auth0.com/docs',
    target: 'blank',
    children: [
      {
        label: 'Authentication API',
        url: 'https://auth0.com/docs/api/authentication',
        target: 'blank'
      },
      {
        label: 'Management API',
        url: 'https://auth0.com/docs/api/management/v2',
        target: 'blank'
      }
    ]
  },
  {
    label: 'Talk to Sales',
    onClick: openSalesModal
  }
]

const LogoImage = () => (
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 216.56">
    <path
      d="M297.82 119.34h-26.17a.6.6 0 0 1-.48-.24.57.57 0 0 1-.1-.53l13.08-45.11a.61.61 0 0 1 1.17 0l13.09 45.11a.61.61 0 0 1-.59.77zM310 158.41h17L301.08 69a17.06 17.06 0 0 0-32.69 0l-25.93 89.42h17l7.54-25.89a.6.6 0 0 1 .58-.44h34.27a.62.62 0 0 1 .59.44zm95.82-51.35h10a.61.61 0 0 1 .62.6v35.27a16.92 16.92 0 0 0 17 16.81 35.32 35.32 0 0 0 10-1.44v-11.58c-1.88.16-4.05.27-5.58.27a5 5 0 0 1-5-5v-34.33a.6.6 0 0 1 .61-.6h10V94.31h-10a.61.61 0 0 1-.61-.61V72.53h-16.49V93.7a.62.62 0 0 1-.62.61h-10zm94.53 51.35h16.35v-44.27A21.31 21.31 0 0 0 495.29 93a35.8 35.8 0 0 0-19 5.89.64.64 0 0 1-.63 0 .62.62 0 0 1-.32-.53V58.14h-16.43v100.27h16.39v-47.93a.6.6 0 0 1 .34-.54c3.08-1.57 9.16-4.21 15.25-4.21a9.42 9.42 0 0 1 6.66 2.73 9.19 9.19 0 0 1 2.75 6.54v43.37zm-164.18-64.1v44.27a21.31 21.31 0 0 0 21.41 21.16 35.8 35.8 0 0 0 20.94-7.22.63.63 0 0 1 .56-.1.61.61 0 0 1 .4.4l1.73 5.59H394v-64.1h-16.43v47.93a.6.6 0 0 1-.33.54c-3.08 1.57-9.16 4.21-15.26 4.21a9.37 9.37 0 0 1-9.41-9.31V94.31zM564.61 147c-5 0-9-2.82-12.18-8.62-3.8-7-5.9-17.69-5.9-30.09s2.1-23.09 5.9-30.1c3.16-5.8 7.14-8.62 12.18-8.62s9 2.82 12.17 8.62c3.81 7 5.91 17.7 5.91 30.1s-2.1 23.08-5.91 30.09c-3.15 5.79-7.13 8.62-12.17 8.62zm0-90.18c-10.54 0-19.46 4.91-25.78 14.2s-9.61 22.12-9.61 37.27 3.32 28 9.61 37.26 15.24 14.2 25.78 14.2 19.45-4.91 25.78-14.2 9.61-22.13 9.61-37.27-3.32-28-9.61-37.27-15.24-14.2-25.78-14.2z"
      fill="#16214d"
      fillRule="evenodd"
    />
    <path
      d="M189 66.92L167.22 0H96.85l21.75 66.92zM96.85 0H26.49L4.75 66.92h70.36zM4.75 66.92zm0 0A96.83 96.83 0 0 0 39.93 175.2l21.74-66.92zm184.21 0L132 108.28l21.75 66.92A96.85 96.85 0 0 0 189 66.92zM39.93 175.2l56.92 41.36 56.93-41.36-56.93-41.36z"
      fill="#eb5424"
    />
  </svg>
)

const AvatarLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24" height="24">
    <g>
      <circle cx="15" cy="15" r="15" />
      <path
        d="M15,19.5L15,19.5c2.5,0,4.5-2,4.6-4.5c0-1.2-0.5-2.4-1.3-3.2c-0.9-0.9-2-1.3-3.2-1.3h0c-2.5,0-4.5,2-4.5,4.5   C10.5,17.4,12.5,19.5,15,19.5z M15,11.6L15,11.6c0.9,0,1.7,0.4,2.4,1c0.6,0.6,1,1.5,1,2.4c0,1.8-1.5,3.3-3.3,3.3h0   c-1.8,0-3.3-1.5-3.3-3.4C11.7,13.1,13.2,11.6,15,11.6z M21.8,8.2C20,6.4,17.5,5.4,15,5.4c-2.6,0-5,1-6.8,2.8   C5.5,11,4.7,15.1,6.2,18.6l1.1-0.5C6,15,6.7,11.5,9.1,9.1c1.6-1.6,3.7-2.5,5.9-2.5c2.3,0,4.3,0.9,5.9,2.4s2.5,3.7,2.5,5.9   c0,2.2-0.9,4.3-2.4,5.9c-2.4,2.4-5.9,3.1-9,1.9l-0.4,1.1c1.1,0.5,2.3,0.7,3.5,0.7c2.5,0,5-1,6.8-2.8c1.8-1.8,2.8-4.2,2.8-6.8   C24.6,12.4,23.6,10,21.8,8.2z M8.9,19.1L8.9,19.1c-0.6,0-1.1,0.2-1.6,0.6c-0.9,0.9-0.9,2.2,0,3.1c0.4,0.4,1,0.6,1.5,0.7h0   c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-1,0.7-1.5c0-0.6-0.2-1.1-0.6-1.6C10,19.3,9.5,19.1,8.9,19.1z M9.6,22c-0.2,0.2-0.4,0.2-0.7,0.3   c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7   C9.9,21.5,9.8,21.8,9.6,22z"
        fill="#ffffff"
      />
    </g>
  </svg>
)

const DropdownComponent = () => (
  <Dropdown>
    <Dropdown.Link name="Switch tenant" icon="switch" onClick={switchTenant} isDisabled="true" />
    <Dropdown.Link name="Settings" icon="settings" url="" />
    <TenantCard name="siddharthkp" region="US" subscription="Free" />
    <Dropdown.Link name="Settings" icon="settings" url="" />
    <Dropdown.Devider />
    <UserCard
      name="Siddharth Kshetrapal"
      avatar_url="https://avatars0.githubusercontent.com/u/1863771?v=4"
    />
    <Dropdown.Link
      name="Subscription overview"
      icon="subscriptions"
      url="https://support.auth0.com/tenants"
    />
    <Dropdown.Devider />
    <Dropdown.Link name="Logout" icon="logout" url="/logout" />
  </Dropdown>
)

const TopNav = styled.div`
  height: 69px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`

const StyledContainer = styled(Container)`
  height: 100%;
`

const TopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

/* TODO: Should be a Close Component */
const UserDropdown = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 0.25em;
  }
`

const InputSearch = styled(TextInput)`
  background-color: #f6f6f6;
  border-color: #f6f6f6;
  height: 35px;
  width: 240px;
`

const Links = styled.div`
  flex-grow: 1;
  text-align: right;
  ul  {
  }
  ul > li {
    display: inline-block;
    margin-right: ${spacing.medium};
    &:last-child {
      margin-right: 0;
    }
  }
  ul > li > a  {
    display: block;
    color: ${colors.base.default};
    text-decoration: none;
  }
  .tenant-name {
    color: ${colors.text.default};
    margin-right: ${spacing.xsmall};
  }
  .notifications {
    bottom: 1px;
    position: relative;
  }
`

const Logo = styled.div`
  a {
    display: block;
    width: 94px;
    height: 35px;
    margin-right: 100px;
  }
`

export default () => (
  <TopNav links={links} DropdownComponent={DropdownComponent}>
    <StyledContainer>
      <TopNavWrapper>
        <Logo>
          <a href="/clients">
            <LogoImage />
          </a>
        </Logo>
        <div>
          <InputSearch placeholder="Search for clients or features" />
        </div>
        <Links>
          <ul>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Talk to Sales</a>
            </li>
            <li>
              <a href="" className="notifications">
                <Icon name="notifications" size={16} color={colors.base.default} />
              </a>
            </li>
            <li>
              <a href="">
                <UserDropdown>
                  <div className="tenant-name">cosmos-demo</div>
                  <Avatar size={24} backgroundColor={colors.base.orange} image={<AvatarLogo />} />
                  <Icon name="chevron-down" size={10} color={colors.text.default} />
                </UserDropdown>
              </a>
            </li>
          </ul>
        </Links>
      </TopNavWrapper>
    </StyledContainer>
  </TopNav>
)
