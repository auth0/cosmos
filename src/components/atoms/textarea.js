import styled from 'styled-components'

import { colors, fonts, spacing, misc } from '../../tokens/'

const Textarea = styled.textarea`
  width: 100%;
  height: 10em;
  box-sizing: border-box;
  padding: ${spacing.xsmall} ${spacing.small};

  background: ${colors.white};
  box-shadow: none;

  border: 1px solid ${colors.grayLight};
  border-radius: ${misc.radius};

  font-family: ${props => (props.code ? fonts.family.code : 'inherit')};

  &:hover {
    border-color: ${colors.grayMedium};
  }
  &:focus {
    border-color: ${colors.blue};
    outline: none;
  }
`

export default Textarea
