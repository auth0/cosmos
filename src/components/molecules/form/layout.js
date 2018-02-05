import { multiply, subtract } from '../../_helpers/pixel-calc'

const getLayout = () => {
  const formWidth = '625px'
  const labelWidth = multiply(formWidth, 0.35)
  const contentWidth = subtract(formWidth, labelWidth)

  return { formWidth, labelWidth, contentWidth }
}

export default getLayout
