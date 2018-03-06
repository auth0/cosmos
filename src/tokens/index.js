import manageColors from './colors-manage'
import extendColors from './colors-extend'
import spacing from './spacing'
import fonts from './fonts'
import misc from './misc'

let colors

if (localStorage.cosmos_theme === 'extend') colors = extendColors
else colors = manageColors

export { colors, spacing, fonts, misc }
