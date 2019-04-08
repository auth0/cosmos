import * as React from 'react'
import styled from '../../../styled'
import { spacing } from '../../../tokens'
import Spinner from '../../spinner'

export const LoadingIndicator = () => <LoadingIndicator.Element />

LoadingIndicator.Element = styled(Spinner)`
  margin-right: ${spacing.xsmall};
`
