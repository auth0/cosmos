import variables from '../variables/colors'

const decisions = {
  text: {
    onDark: variables.white.base,
    onLight: variables.black.light
  },
  background: {
    primary: variables.blue.lighter,
    primary_hover: variables.blue.light,
    primary_focus: variables.blue.light,
    primary_active: variables.blue.base
  },
  border: {
    primary: variables.blue.lighter,
    primary_hover: variables.blue.light,
    primary_focus: variables.blue.light,
    primary_active: variables.blue.base
  }
}

export default decisions
