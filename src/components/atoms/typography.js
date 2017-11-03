import styled from 'styled-components'

import { colors } from '../../tokens'

const Headline = styled.h1`
  margin: 20px 0 14px;
  line-height: 1.8;
  color: ${colors.base};
  font-size: 48px;
  font-weight: 500;
`

const Subheader = styled.h6`
  margin: 20px 0 14px;
  line-height: 1.8;
  color: ${colors.grayDark};
  font-size: 13px;
  font-weight: 300;
`

const Text = styled.span`
  color: ${colors.grayDark};
  font-size: 14px;
  font-weight: 300;
`

export { Headline, Subheader, Text }
