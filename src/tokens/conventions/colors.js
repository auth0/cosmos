import values from '../values/colors'

const conventions = {
  destructive: {
    background: {
      default: values.red.base,
      hover: values.red.light,
      focus: values.red.lighter
    },
    foreground: {
      default: values.white.base
    }
  },
  link: {
    background: {
      default: 'transparent'
    },
    foreground: {
      default: values.blue.base,
      hover: values.blue.light,
      focus: values.blue.lighter
    }
  }
}

export default conventions
