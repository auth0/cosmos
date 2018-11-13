export default function defaultPropChangeWarning(
  Component,
  propName,
  currentValue,
  futureDefault,
  version
) {
  const componentName = Component.constructor.name
  const currentDefault = Component.defaultProps[propName]
  if (currentDefault === futureDefault) return

  const warning = `
	The prop '${propName}' of the ${componentName} component will change from '${currentDefault}' to '${futureDefault}' on version ${version} of Cosmos.
	Please, manually set your desired value for the prop now to avoid unexpected changes when you upgrade.
	`
  console.warn(warning)
}
