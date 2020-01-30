import * as React from "react";
import styled from "../../styled";

import { colors } from "../../tokens";
import iconData from "./icons.json";
import Automation from "../../_helpers/automation-attribute";

export interface IIconProps {
  /** HTML ID of the component */
  id?: string;
  /** Icon name */
  name: string;
  /** Icon size */
  size?: number | string;
  /** Icon foreground color */
  color?: string;
  onClick?: Function;
}

const icons = iconData.icons;

const Icon = (props: IIconProps) => {
  // If the icon name isn't found, show a question mark instead.
  const icon = icons[props.name] || icons.help;

  // Use an icon name from tokens, fallback to hexcode (without validation)
  const color = colors.base[props.color] || props.color;

  return (
    <Icon.Element {...Automation("icon")} {...props}>
      <Image width={props.size} height={props.size} viewBox={`0 0 ${icon.width} ${icon.height}`} color={color}>
        {icon.paths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </Image>
    </Icon.Element>
  );
};

Icon.Element = styled.i`
  display: inline-block;
  line-height: 1;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
const Image = styled.svg`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  width: ${(imageProps) => imageProps.width}px;
  height: ${(imageProps) => imageProps.height}px;
  path {
    fill: ${(imageProps) => imageProps.color};
  }
`;

const __ICONNAMES__ = Object.keys(icons);
const __COLORS__ = Object.keys(colors.base);

Icon.defaultProps = {
  size: 20,
  color: "default"
};

export default Icon;
export { __ICONNAMES__ };
