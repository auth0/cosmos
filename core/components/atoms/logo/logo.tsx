import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'

const colors = {
  default: '#EB5424',
  dark: '#00000029',
  light: '#E9E9E9'
}

const sizes = {
  default: { width: 29, height: 32 },
  small: { width: 25, height: 27 },
  tiny: { width: 17, height: 19 }
}

export interface ILogoProps {
  /** HTML ID of the component */
  id?: string
  size: 'tiny' | 'small' | 'default'
  color: 'default' | 'dark' | 'light'
  onClick?: Function
}

const Logo = ({ size, color, ...props }: ILogoProps) => (
  <Logo.Element size={size} {...Automation('logo')} {...props}>
    <svg height={sizes[size].height} width={sizes[size].width} viewBox="0 0 29 32">
      <g transform="translate(-100.000000, -88.000000)" fill={colors[color]}>
        <g transform="translate(100.000000, 88.000000)">
          <path d="M22.9616476,25.864 L19.715652,15.9851429 L28.2126476,9.88133333 L17.7094918,9.88133333 L14.4633035,0.00285714286 L14.4623403,0.00019047619 L24.9670372,0.00019047619 L28.2139961,9.88038095 L28.2141888,9.88019048 L28.2168857,9.87866667 C30.1024528,15.6104762 28.160442,22.1297143 22.9616476,25.864 L22.9616476,25.864 L22.9616476,25.864 Z M5.96418875,25.864 L5.96149178,25.8659048 L14.4606065,31.9712381 L22.9616476,25.8641905 L14.4633035,19.7586667 L5.96418875,25.864 L5.96418875,25.864 L5.96418875,25.864 Z M0.711069704,9.87885714 L0.711069704,9.87885714 C-1.27389999,15.9209524 1.03027533,22.3232381 5.96245499,25.8651429 L5.96322555,25.8620952 L9.2096065,15.9838095 L0.714537237,9.88114286 L11.2151888,9.88114286 L14.4615697,0.00266666667 L14.4623403,0 L3.95706538,0 L0.711069704,9.87885714 L0.711069704,9.87885714 L0.711069704,9.87885714 Z" />
        </g>
      </g>
    </svg>
  </Logo.Element>
)

Logo.Element = styled.span`
  display: inline-block;
  height: ${(props) => sizes[props.size].height}px;
  width: ${(props) => sizes[props.size].width}px;
  svg {
    display: block;
  }
`

Logo.defaultProps = {
  /** Defines the size of the logo */
  size: 'default',
  /** Defines the color of the logo */
  color: 'default'
}

export default Logo
