import { css } from '../styled'
import { misc } from '../tokens'

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
