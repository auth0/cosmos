import { css } from '@auth0/cosmos/styled'
import { misc } from '@auth0/cosmos-tokens'

const containerStyles = css`
  line-height: ${misc.lineHeight};

  /**
   * FIXME: Apps using Styleguide + Cosmos 
   * don't pick up this from the globals.
   * See: https://github.com/auth0/cosmos/issues/1460 
   */
  ul {
    list-style: none;
    padding: 0;
  }
`

export default containerStyles
