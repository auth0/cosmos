import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Paragraph } from '@auth0/cosmos'

const CardWrapper = styled.div`
  line-height: normal;
  justify-content: center;
`

const WelcomeCard = props => (
  <CardWrapper>
    <Image source={props.imagePath} />
    <Paragraph>{props.paragraph}</Paragraph>
  </CardWrapper>
)

WelcomeCard.propTypes = {
  imagePath: PropTypes.string,
  paragraph: PropTypes.string
}

WelcomeCard.defaultProps = {
  imagePath: '',
  paragraph: ''
}

export default WelcomeCard
