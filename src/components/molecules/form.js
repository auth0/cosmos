import styled from 'styled-components'

import { spacing, colors } from '../../tokens'

import Input, { StyledInput } from '../atoms/input'
import Textarea from '../atoms/textarea'
import { Text } from '../atoms/typography'

const FormLabel = styled(Text)`
  box-sizing: border-box;
  display: inline-block;

  vertical-align: top;
  position: relative;
  top: 10px;
  text-align: right;

  padding-right: ${spacing.small};
`

const FormField = styled.div`
  margin: ${spacing.medium} 0;
`

const HelperText = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
`

const Error = styled.div`
  font-size: 13px;
  color: ${colors.orange};
`

const Form = styled.form`
  ${FormLabel} {
    width: 30%;
  }
  ${StyledInput}, ${Textarea} {
    width: 70%;
  }
  ${HelperText}, ${Error} {
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} 30%;
  }
`

export { Form, FormField, FormLabel, HelperText, Error }
