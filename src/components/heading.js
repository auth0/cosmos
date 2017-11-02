import styled from 'styled-components'

import { colors } from '../tokens/'

const common = `
  margin: 20px 0 14px;
  line-height: 1.8;
`

const Headline = styled.h1`
  ${common};
  color: ${colors.base};
  font-size: 48px;
  font-weight: 500;
`

const Subheader = styled.h6`
  ${common};
  color: ${colors.grayDark};
  font-size: 13px;
  font-weight: 300;
`

export { Headline, Subheader }
