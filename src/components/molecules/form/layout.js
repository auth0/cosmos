import { multiply, subtract } from '../../_helpers/pixel-calc'

const getLayoutValues = layout => {
  let formWidth, labelWidth, contentWidth

  if (layout === 'label-on-left') {
    formWidth = '625px'
    labelWidth = multiply(formWidth, 0.35)
    contentWidth = subtract(formWidth, labelWidth)
  } else if (layout === 'label-on-top') {
    formWidth = labelWidth = contentWidth = 'auto'
  }

  return { formWidth, labelWidth, contentWidth }
}

export default getLayoutValues
