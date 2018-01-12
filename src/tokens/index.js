import reset from '../components/_helpers/reset'
import spacing from './spacing'
import fonts from './fonts'
import misc from './misc'

/* current way of tokens, soon to be deprecated */
import oldColors from './colors'

/* color concventions, this is what components should use */
import colorConventions from './conventions/colors'

/*
  merge the 2 types of tokens, so that components continue to work
  while we migrate them slowly
*/
const colors = Object.assign({}, oldColors, colorConventions)

reset() // TODO: Find better place to add resets globally

export { colors, spacing, fonts, misc }
