import styled from 'styled-components'

import { colors, fonts, spacing, misc } from '../../tokens/'

const Textarea = styled.textarea`
  width: 100%;
  height: 10em;
  box-sizing: border-box;
  padding: 0 ${spacing.small};

  background: ${colors.white};
  box-shadow: none;

  border: 1px solid ${colors.grayLight};
  border-radius: ${misc.radius};

  font-family: ${props => (props.code ? fonts.code : fonts.text)};
  font-size: ${props => (props.code ? 13 : 14)}px;
  line-height: 36px;

  &:hover {
    border-color: ${colors.grayMedium};
  }
  &:focus {
    border-color: ${colors.blue};
    outline: none;
  }
`

export default Textarea
