import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '@auth0/cosmos-tokens'
import { Icon } from '@auth0/cosmos'

const StyledBanner = styled.div`
  background-color: white;
  width: 100%;
  padding: 16px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const BannerBody = styled.div``

const BannerIcon = styled.div`
  width: 54px;
`

const Banner = props => {
  /* you can pass on all the props to the component like this */
  return (
    <StyledBanner {...props}>
      <BannerIcon>
        <Icon name="notifications" size={20} color="red" />
      </BannerIcon>
      <BannerBody>{props.children}</BannerBody>
    </StyledBanner>
  )
}

Banner.propTypes = {}

Banner.defaultProps = {}

export default Banner
