import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const resolveVariant = props => (props.full ? 'full' : 'default')

const colors = {
  default: {
    default: '#EB5424',
    dark: '#00000029',
    light: '#E9E9E9'
  },
  full: {
    default: '#333333',
    dark: '#333333',
    light: '#d0d2d3'
  }
}

const sizes = {
  default: {
    default: { width: 29, height: 32 },
    small: { width: 25, height: 27 },
    tiny: { width: 17, height: 19 }
  },
  full: {
    default: { width: 89, height: 32 },
    small: { width: 75, height: 27 },
    tiny: { width: 53, height: 19 }
  }
}

const variants = {}

variants['full'] = ({ color }) => (
  <svg viewBox="0 0 600 216.56">
    <path
      d="M297.82 119.34h-26.17a.61.61 0 0 1-.49-.24.6.6 0 0 1-.1-.53l13.08-45.11a.61.61 0 0 1 1.18 0l13.08 45.11a.6.6 0 0 1-.1.53.61.61 0 0 1-.48.24zM310 158.41h17L301.08 69a17.06 17.06 0 0 0-32.69 0l-25.93 89.42h17.05l7.49-25.89a.61.61 0 0 1 .59-.44h34.26a.61.61 0 0 1 .59.44zm95.82-51.35h10a.61.61 0 0 1 .61.61v35.27a16.93 16.93 0 0 0 17 16.81 35 35 0 0 0 10-1.44v-11.59c-1.88.16-4 .27-5.57.27a5 5 0 0 1-5-5v-34.33a.61.61 0 0 1 .61-.61h10V94.31h-10a.61.61 0 0 1-.61-.61V72.53h-16.49V93.7a.61.61 0 0 1-.61.61h-10zm94.53 51.35h16.35v-44.27A21.31 21.31 0 0 0 495.29 93a35.79 35.79 0 0 0-19 5.89.62.62 0 0 1-.63 0 .61.61 0 0 1-.32-.53V58.14h-16.43v100.27h16.39v-47.93a.6.6 0 0 1 .33-.54c3.08-1.57 9.16-4.21 15.25-4.21a9.41 9.41 0 0 1 6.66 2.73 9.2 9.2 0 0 1 2.76 6.54v43.37zm-164.18-64.1v44.27a21.31 21.31 0 0 0 21.41 21.17 35.77 35.77 0 0 0 20.94-7.22.62.62 0 0 1 .56-.1.61.61 0 0 1 .4.4l1.73 5.59H394V94.31h-16.43v47.94a.61.61 0 0 1-.33.54c-3.08 1.57-9.16 4.21-15.25 4.21a9.38 9.38 0 0 1-9.42-9.31V94.31zM564.61 147c-5 0-9-2.82-12.17-8.62-3.81-7-5.91-17.69-5.91-30.09s2.1-23.09 5.91-30.09c3.15-5.8 7.13-8.62 12.17-8.62s9 2.82 12.17 8.62c3.81 7 5.91 17.69 5.91 30.09s-2.1 23.09-5.91 30.09c-3.15 5.79-7.13 8.62-12.17 8.62zm0-90.18c-10.54 0-19.46 4.91-25.78 14.2s-9.61 22.12-9.61 37.27 3.32 28 9.61 37.27 15.24 14.2 25.78 14.2 19.46-4.91 25.78-14.2 9.61-22.14 9.61-37.28-3.32-28-9.61-37.27-15.24-14.2-25.78-14.2z"
      fill={colors.full[color]}
      fillRule="evenodd"
    />
    <path
      d="M189 66.92L167.22 0H96.85l21.75 66.92zM96.85 0H26.49L4.75 66.92h70.36zM4.75 66.92zm0 0A96.85 96.85 0 0 0 39.93 175.2l21.74-66.92zm184.21 0L132 108.28l21.74 66.92A96.85 96.85 0 0 0 189 66.92zM39.93 175.2l56.93 41.36 56.92-41.36-56.93-41.36z"
      fill="#eb5424"
    />
  </svg>
)

variants['default'] = ({ color, size, full }) => (
  <svg height={sizes.default[size].height} width={sizes.default[size].width} viewBox="0 0 29 32">
    <g transform="translate(-100.000000, -88.000000)" fill={colors.default[color]}>
      <g transform="translate(100.000000, 88.000000)">
        <path d="M22.9616476,25.864 L19.715652,15.9851429 L28.2126476,9.88133333 L17.7094918,9.88133333 L14.4633035,0.00285714286 L14.4623403,0.00019047619 L24.9670372,0.00019047619 L28.2139961,9.88038095 L28.2141888,9.88019048 L28.2168857,9.87866667 C30.1024528,15.6104762 28.160442,22.1297143 22.9616476,25.864 L22.9616476,25.864 L22.9616476,25.864 Z M5.96418875,25.864 L5.96149178,25.8659048 L14.4606065,31.9712381 L22.9616476,25.8641905 L14.4633035,19.7586667 L5.96418875,25.864 L5.96418875,25.864 L5.96418875,25.864 Z M0.711069704,9.87885714 L0.711069704,9.87885714 C-1.27389999,15.9209524 1.03027533,22.3232381 5.96245499,25.8651429 L5.96322555,25.8620952 L9.2096065,15.9838095 L0.714537237,9.88114286 L11.2151888,9.88114286 L14.4615697,0.00266666667 L14.4623403,0 L3.95706538,0 L0.711069704,9.87885714 L0.711069704,9.87885714 L0.711069704,9.87885714 Z" />
      </g>
    </g>
  </svg>
)

const Logo = props => (
  <Logo.Element {...props}>{variants[resolveVariant(props)](props)}</Logo.Element>
)

Logo.Element = styled.span`
  display: inline-block;
  height: ${props => sizes[resolveVariant(props)][props.size].height}px;
  width: ${props => sizes[resolveVariant(props)][props.size].width}px;
  svg {
    display: block;
  }
`

Logo.propTypes = {
  /** Defines the size of the logo */
  size: PropTypes.oneOf(['tiny', 'small', 'default']),
  /** Defines the color of the logo */
  color: PropTypes.oneOf(['default', 'dark', 'light']),
  /** Defines whether to show only the default or the full logo */
  full: PropTypes.bool
}

Logo.defaultProps = {
  size: 'default',
  color: 'default',
  full: false
}

export default Logo
