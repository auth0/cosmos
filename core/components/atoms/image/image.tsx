import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

export type ImageFitKey = 'contain' | 'cover' | 'none' | 'scale-down'
export const ImageFit: Record<ImageFitKey, string> = {
  contain: 'contain',
  cover: 'cover',
  none: 'unset',
  'scale-down': 'scale-down'
}

export interface IImageProps {
  /** HTML ID of the component */
  id?: string
  /** @depreacted:src URL of the image */
  source?: string
  /** URL of the image */
  src?: string
  /** Alt text is mandatory, please read the accessibility section */
  alt?: string
  /** Image height, can be any length unit, absolute or relative */
  height?: string
  /** Image width, can be any length unit, absolute or relative */
  width?: string
  /** Sets how the content of the image is been resized to fit its container. */
  fit?: ImageFitKey
  /** Sets the image width to auto */
  disableResponsive?: boolean
  /** Function called when the image can't load for whatever reason */
  onError?: Function
  onClick?: Function
}

const Image = (props: IImageProps) => (
  <Image.Element
    src={props.src || props.source}
    alt={props.alt}
    {...Automation('image')}
    {...props}
  />
)

Image.Element = styled.img`
  display: block;
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  max-width: ${props => (props.disableResponsive ? 'auto' : '100%')};
  object-fit: ${props => ImageFit[props.fit]};
`

Image.defaultProps = {
  source: null,
  alt: null,
  width: null,
  height: null,
  fit: 'none'
}

export default Image
