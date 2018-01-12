import values from '../values/colors'

const meaning = {
  destructive: {
    background: {
      default: values.red.base,
      hover: values.red.light,
      focus: values.red.lighter
    },
    foreground: {
      default: values.white.base
    }
  }
}

export default meaning
